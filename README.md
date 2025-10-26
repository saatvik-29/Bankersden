# Banker's Den - Full Stack Financial Platform

A comprehensive financial services platform with admin panel, AI chatbot, and enhanced EMI calculator. Built with React, Node.js, Express, MongoDB, and Google Gemini AI.

## 🌟 New Features

### 🤖 AI-Powered Chatbot ("den's bots")
- Powered by Google Gemini AI
- Organization-specific knowledge base
- Supports basic math and statistical reasoning
- Admin-managed content (paragraphs and Q&A pairs)

### 👨‍💼 Admin Panel
- MongoDB-based lead management system
- View and manage all loan applications and contact forms
- Change lead status (Active, Processing, Completed)
- Manage chatbot knowledge base
- Secure authentication with hardcoded admin access

### 📊 Enhanced EMI Calculator
- Manual input boxes alongside sliders
- Real-time sync between input methods
- Improved UI/UX with cleaner styling

### 🎨 UI/UX Improvements
- Consistent styling across all components
- Better responsive design
- Enhanced user experience

## 📁 Project Structure

```
project/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable components (Header, Footer, Chatbot)
│   │   ├── pages/         # Page components including AdminLogin, AdminDashboard
│   │   └── lib/          # API utilities
│   ├── package.json       # Client dependencies
│   └── vite.config.ts     # Vite configuration with API proxy
├── backend/               # Node.js backend
│   ├── models/           # MongoDB models (Lead, Admin, ChatData)
│   ├── services/         # Business logic (Chatbot service)
│   ├── middleware/       # Authentication middleware
│   ├── templates/        # Email templates
│   ├── .env             # Environment variables
│   ├── server.js        # Express server with all routes
│   ├── database.js      # MongoDB connection
│   └── seedData.js      # Sample chatbot data
├── package.json         # Root package.json for scripts
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Install all dependencies (root, client, and backend)
npm run install-all
```

### 2. Setup Environment Variables
Copy the example environment file and configure:
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env`:
```env
# MongoDB
MONGODB_URI=mongodb://localhost:27017/bankersden

# JWT Secret
JWT_SECRET=your-super-secret-jwt-key-change-in-production

# Gemini AI
GEMINI_API_KEY=your-gemini-api-key-here

# Email Configuration
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=your_admin@gmail.com
PORT=5050

# OAuth2 (if using)
OAUTH2_CLIENT_ID=your-oauth2-client-id
OAUTH2_CLIENT_SECRET=your-oauth2-client-secret
OAUTH2_REFRESH_TOKEN=your-oauth2-refresh-token
```

### 3. Setup MongoDB
Install and start MongoDB locally, or use MongoDB Atlas for cloud hosting.

### 4. Get Gemini API Key
1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Add it to your `.env` file

### 5. Seed Sample Data (Optional)
```bash
cd backend
node seedData.js
```

### 6. Development Mode
```bash
# Run both client and server concurrently
npm run dev

# Or run separately:
npm run client:dev    # Frontend only (http://localhost:5173)
npm run backend:dev   # Backend only (http://localhost:5050)
```

### 7. Access the Application
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5050
- **Admin Panel**: http://localhost:5173/admin/login
  - Username: `admin`
  - Password: `admin123`

## 📧 Email Setup

Follow the [Gmail SMTP Setup Guide](GMAIL_SMTP_SETUP.md) to configure email functionality.

## 🛠 Available Scripts

### Root Level Scripts
- `npm run install-all` - Install dependencies for all projects
- `npm run dev` - Run both client and backend in development mode
- `npm run build` - Build client for production
- `npm run start` - Build and start production server
- `npm run production` - Full production setup (install, build, start)
- `npm run client:dev` - Run client development server
- `npm run client:build` - Build client for production
- `npm run backend:dev` - Run backend development server
- `npm run backend:start` - Run backend in production mode

### Client Scripts (in client/ directory)
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts (in backend/ directory)
- `npm run start` - Start production server
- `npm run dev` - Start development server

## 🚀 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the client:
   ```bash
   npm run client:build
   ```
2. Deploy the `client/dist` folder to your hosting service
3. Update API endpoints in client code to point to your backend URL

### Backend Deployment (Railway/Render/Heroku)
1. Deploy the `backend/` directory
2. Set environment variables in your hosting service:
   - `SMTP_USER`
   - `SMTP_PASS`
   - `ADMIN_EMAIL`
   - `PORT` (usually set automatically by hosting service)

### Environment Variables for Production
```env
# Backend (.env)
SMTP_USER=your_production_email@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@yourdomain.com
PORT=3001
```

## 🔧 Features

- **Professional Email Templates**: Beautiful HTML emails for clients and admins
- **Loan Application Forms**: Multiple loan types with dynamic fields
- **Contact Form**: Customer inquiry handling
- **Responsive Design**: Works on all devices
- **Email Notifications**: Automatic confirmations and admin alerts
- **Form Validation**: Client and server-side validation

## 📱 API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form
- `POST /api/loan-application` - Submit loan application
- `POST /api/chat` - Chat with AI bot
- `GET /api/health` - Health check

### Admin Endpoints (Requires Authentication)
- `POST /api/admin/login` - Admin login
- `GET /api/admin/leads` - Get all leads with filtering
- `GET /api/admin/leads/:id` - Get specific lead
- `PUT /api/admin/leads/:id/status` - Update lead status
- `GET /api/admin/chat-data` - Get chatbot knowledge base
- `POST /api/admin/chat-data` - Add new chatbot data
- `PUT /api/admin/chat-data/:id` - Update chatbot data
- `DELETE /api/admin/chat-data/:id` - Delete chatbot data

## 🎨 Tech Stack

### Frontend
- React 18 with TypeScript
- Tailwind CSS for styling
- Vite for build tooling
- React Router for navigation
- Lucide React for icons

### Backend
- Node.js with Express.js
- MongoDB with Mongoose ODM
- JWT for authentication
- Google Gemini AI for chatbot
- Nodemailer with OAuth2 for emails
- bcryptjs for password hashing

### Database
- MongoDB for data storage
- Collections: leads, admins, chatdata

### AI & External Services
- Google Gemini AI for intelligent responses
- Gmail SMTP for email notifications

## 📝 License

This project is private and proprietary.

## 🤝 Support

For support, email your admin or create an issue in the repository.