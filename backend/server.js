import dotenv from 'dotenv';

// Load environment variables FIRST
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { getSmtpConfig } from './config.js';
import { clientTemplates } from './templates/clientTemplates.js';
import { adminTemplates } from './templates/adminTemplates.js';
import OAuth2EmailService from './oauth2-email.js';
import connectDB from './database.js';
import Lead from './models/Lead.js';
import Admin from './models/Admin.js';
import ChatData from './models/ChatData.js';
import ChatbotService from './services/chatbot.js';
import { generateToken, authenticateAdmin } from './middleware/auth.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const smtpConfig = getSmtpConfig();
const PORT = smtpConfig.port;

// Connect to MongoDB (non-blocking)
connectDB().catch(err => {
  console.error('MongoDB connection failed:', err.message);
  console.log('Server will continue without database functionality');
});

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from client build
app.use(express.static(path.join(__dirname, '../client/dist')));

// Initialize services
const emailService = new OAuth2EmailService();
const chatbotService = new ChatbotService();

// Admin Authentication Routes
app.post('/api/admin/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const admin = await Admin.findOne({ username });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    const token = generateToken(admin._id);
    res.json({ token, message: 'Login successful' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin Lead Management Routes
app.get('/api/admin/leads', authenticateAdmin, async (req, res) => {
  try {
    const { status, type, page = 1, limit = 10 } = req.query;
    const filter = {};
    
    if (status) filter.status = status;
    if (type) filter.type = type;
    
    const leads = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);
      
    const total = await Lead.countDocuments(filter);
    
    res.json({
      leads,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/admin/leads/:id', authenticateAdmin, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    res.json(lead);
  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/admin/leads/:id/status', authenticateAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    
    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }
    
    res.json(lead);
  } catch (error) {
    console.error('Error updating lead status:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Admin Chat Data Management Routes
app.get('/api/admin/chat-data', authenticateAdmin, async (req, res) => {
  try {
    const chatData = await chatbotService.getAllChatData();
    res.json(chatData);
  } catch (error) {
    console.error('Error fetching chat data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/api/admin/chat-data', authenticateAdmin, async (req, res) => {
  try {
    const { type, title, content, question, answer } = req.body;
    const chatData = await chatbotService.addChatData(type, {
      title,
      content,
      question,
      answer
    });
    res.status(201).json(chatData);
  } catch (error) {
    console.error('Error adding chat data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.put('/api/admin/chat-data/:id', authenticateAdmin, async (req, res) => {
  try {
    const chatData = await chatbotService.updateChatData(req.params.id, req.body);
    if (!chatData) {
      return res.status(404).json({ message: 'Chat data not found' });
    }
    res.json(chatData);
  } catch (error) {
    console.error('Error updating chat data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.delete('/api/admin/chat-data/:id', authenticateAdmin, async (req, res) => {
  try {
    const chatData = await chatbotService.deleteChatData(req.params.id);
    if (!chatData) {
      return res.status(404).json({ message: 'Chat data not found' });
    }
    res.json({ message: 'Chat data deleted successfully' });
  } catch (error) {
    console.error('Error deleting chat data:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Chatbot Route
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const response = await chatbotService.getChatResponse(message);
    res.json({ response });
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ message: error.message });
  }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { full_name, email, phone, category, message } = req.body;
    const applicationNumber = `CT${Date.now()}`;

    // Save to database
    const lead = new Lead({
      applicationNumber,
      type: 'contact',
      full_name,
      email,
      phone,
      category,
      message,
      status: 'active'
    });
    await lead.save();

    // Send admin notification
    const adminTemplate = adminTemplates.newContactForm({ full_name, email, phone, category, message });
    const adminMailOptions = {
      from: smtpConfig.user,
      to: smtpConfig.adminEmail,
      subject: adminTemplate.subject,
      html: adminTemplate.html,
    };

    // Send client confirmation
    const clientTemplate = clientTemplates.contactFormConfirmation({ full_name, email, phone, category, message });
    const clientMailOptions = {
      from: smtpConfig.user,
      to: email,
      subject: clientTemplate.subject,
      html: clientTemplate.html,
    };

    await Promise.all([
      emailService.sendEmail(adminMailOptions),
      emailService.sendEmail(clientMailOptions)
    ]);

    res.json({ success: true, message: 'Message sent successfully', applicationNumber });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, message: 'Failed to send message' });
  }
});

// Loan application endpoint
app.post('/api/loan-application', async (req, res) => {
  try {
    const formData = req.body;
    const applicationNumber = `LA${Date.now()}`;

    // Save to database
    const lead = new Lead({
      applicationNumber,
      type: 'loan',
      status: 'active',
      ...formData
    });
    await lead.save();

    // Send admin notification
    const adminTemplate = adminTemplates.newLoanApplication(formData, applicationNumber);
    const adminMailOptions = {
      from: smtpConfig.user,
      to: smtpConfig.adminEmail,
      subject: adminTemplate.subject,
      html: adminTemplate.html,
    };

    // Send client confirmation
    const clientTemplate = clientTemplates.loanApplicationConfirmation({
      ...formData,
      applicationNumber
    });
    const clientMailOptions = {
      from: smtpConfig.user,
      to: formData.email,
      subject: clientTemplate.subject,
      html: clientTemplate.html,
    };

    await Promise.all([
      emailService.sendEmail(adminMailOptions),
      emailService.sendEmail(clientMailOptions)
    ]);

    res.json({ 
      success: true, 
      message: 'Application submitted successfully',
      applicationNumber 
    });
  } catch (error) {
    console.error('Error sending loan application:', error);
    res.status(500).json({ success: false, message: 'Failed to submit application' });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running' });
});

// Serve React app for all non-API routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Email Configuration:');
  console.log('SMTP User:', smtpConfig.user);
  console.log('Admin Email:', smtpConfig.adminEmail);
  console.log('Port:', smtpConfig.port);
  console.log('Default admin credentials: admin / admin123');
});
