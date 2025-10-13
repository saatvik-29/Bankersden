import dotenv from 'dotenv';

// Load environment variables FIRST
dotenv.config();

import express from 'express';
import cors from 'cors';
import { getSmtpConfig } from './config.js';
import { clientTemplates } from './templates/clientTemplates.js';
import { adminTemplates } from './templates/adminTemplates.js';
import OAuth2EmailService from './oauth2-email.js';

const app = express();
const smtpConfig = getSmtpConfig();
const PORT = smtpConfig.port;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OAuth2 Email Service
const emailService = new OAuth2EmailService();

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { full_name, email, phone, category, message } = req.body;

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

    res.json({ success: true, message: 'Message sent successfully' });
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Email Configuration:');
  console.log('SMTP User:', smtpConfig.user);
  console.log('Admin Email:', smtpConfig.adminEmail);
  console.log('Port:', smtpConfig.port);
});
