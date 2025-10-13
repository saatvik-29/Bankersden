# BankersDen - Full Stack Loan Management System

A professional loan management system with React frontend and Node.js backend, featuring beautiful email templates and form handling.

## 📁 Project Structure

```
project/
├── client/                 # React frontend
│   ├── src/               # React components and pages
│   ├── package.json       # Client dependencies
│   └── vite.config.ts     # Vite configuration
├── backend/               # Node.js backend
│   ├── templates/         # Email templates
│   ├── .env              # Environment variables
│   ├── server.js         # Express server
│   ├── config.js         # Configuration
│   └── package.json      # Backend dependencies
├── package.json          # Root package.json for scripts
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
# Install all dependencies (root, client, and backend)
npm run install-all
```

### 2. Configure Email (Backend)
Edit `backend/.env`:
```env
SMTP_USER=your_gmail@gmail.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=your_admin@gmail.com
PORT=3001
```

### 3. Development Mode
```bash
# Run both client and server concurrently
npm run dev

# Or run separately:
npm run client:dev    # Frontend only (http://localhost:5173)
npm run backend:dev   # Backend only (http://localhost:3001)
```

## 📧 Email Setup

Follow the [Gmail SMTP Setup Guide](GMAIL_SMTP_SETUP.md) to configure email functionality.

## 🛠 Available Scripts

### Root Level Scripts
- `npm run install-all` - Install dependencies for all projects
- `npm run dev` - Run both client and backend in development mode
- `npm run build` - Build client for production
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

- `POST /api/contact` - Submit contact form
- `POST /api/loan-application` - Submit loan application
- `GET /api/health` - Health check

## 🎨 Tech Stack

### Frontend
- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router

### Backend
- Node.js
- Express
- Nodemailer
- Gmail SMTP

## 📝 License

This project is private and proprietary.

## 🤝 Support

For support, email your admin or create an issue in the repository.