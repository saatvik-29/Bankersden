# Deployment Guide

This guide covers deploying the BankersDen application with separate client and backend deployments.

## 🏗 Architecture Overview

- **Frontend**: React app (client/) - Deploy to Vercel/Netlify
- **Backend**: Node.js API (backend/) - Deploy to Railway/Render/Heroku

## 🚀 Frontend Deployment (Vercel - Recommended)

### Option 1: Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Build and deploy:
   ```bash
   cd client
   npm run build
   vercel --prod
   ```

3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `client`

### Option 2: Vercel Dashboard
1. Connect your GitHub repository
2. Set Root Directory to `client`
3. Build Command: `npm run build`
4. Output Directory: `dist`
5. Deploy

### Option 3: Netlify
1. Build the client:
   ```bash
   cd client && npm run build
   ```
2. Drag and drop the `client/dist` folder to Netlify
3. Or connect GitHub and set build directory to `client`

## 🖥 Backend Deployment (Railway - Recommended)

### Option 1: Railway
1. Go to [Railway.app](https://railway.app)
2. Create new project from GitHub
3. Set Root Directory to `backend`
4. Add environment variables:
   ```
   SMTP_USER=your_gmail@gmail.com
   SMTP_PASS=your_app_password
   ADMIN_EMAIL=your_admin@gmail.com
   ```
5. Deploy

### Option 2: Render
1. Go to [Render.com](https://render.com)
2. Create new Web Service
3. Connect GitHub repository
4. Set Root Directory to `backend`
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Add environment variables

### Option 3: Heroku
1. Install Heroku CLI
2. Create app:
   ```bash
   cd backend
   heroku create your-app-name
   ```
3. Set environment variables:
   ```bash
   heroku config:set SMTP_USER=your_gmail@gmail.com
   heroku config:set SMTP_PASS=your_app_password
   heroku config:set ADMIN_EMAIL=your_admin@gmail.com
   ```
4. Deploy:
   ```bash
   git subtree push --prefix backend heroku main
   ```

## 🔗 Connecting Frontend to Backend

After deploying backend, update the API URLs in your frontend:

### Update API Base URL
In your React app, update the API calls to use your backend URL:

```javascript
// Before (development)
const API_BASE = 'http://localhost:3001';

// After (production)
const API_BASE = 'https://your-backend-url.railway.app';
```

### Environment Variables for Frontend
Create `client/.env.production`:
```env
VITE_API_URL=https://your-backend-url.railway.app
```

Then use in your code:
```javascript
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001';
```

## 🔒 Security Considerations

### Backend Security
1. **Environment Variables**: Never commit `.env` files
2. **CORS**: Configure CORS for your frontend domain:
   ```javascript
   app.use(cors({
     origin: ['https://your-frontend-domain.vercel.app']
   }));
   ```
3. **Rate Limiting**: Add rate limiting for API endpoints
4. **Input Validation**: Validate all form inputs

### Frontend Security
1. **Environment Variables**: Use `VITE_` prefix for public variables
2. **API Keys**: Never expose sensitive keys in frontend
3. **HTTPS**: Always use HTTPS in production

## 📊 Monitoring & Maintenance

### Backend Monitoring
- Check server logs regularly
- Monitor email delivery rates
- Set up uptime monitoring

### Frontend Monitoring
- Monitor build status
- Check for broken links
- Test form submissions

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors**:
   - Update CORS configuration in backend
   - Check frontend API URLs

2. **Email Not Sending**:
   - Verify Gmail app password
   - Check environment variables
   - Test SMTP connection

3. **Build Failures**:
   - Check Node.js version compatibility
   - Verify all dependencies are installed
   - Check for TypeScript errors

### Debug Commands

```bash
# Check backend health
curl https://your-backend-url.railway.app/api/health

# Test email endpoint
curl -X POST https://your-backend-url.railway.app/api/contact \
  -H "Content-Type: application/json" \
  -d '{"full_name":"Test","email":"test@example.com","phone":"123","category":"Test","message":"Test"}'
```

## 📋 Deployment Checklist

### Before Deployment
- [ ] Test all forms locally
- [ ] Verify email functionality
- [ ] Update API URLs for production
- [ ] Set up environment variables
- [ ] Test build process

### After Deployment
- [ ] Test frontend deployment
- [ ] Test backend API endpoints
- [ ] Verify email sending works
- [ ] Test form submissions end-to-end
- [ ] Set up monitoring
- [ ] Update DNS if using custom domain

## 🔄 CI/CD Setup (Optional)

### GitHub Actions for Auto-Deployment

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: cd client && npm install && npm run build
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}

  deploy-backend:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - # Add your backend deployment steps
```

Your application is now ready for production deployment! 🎉