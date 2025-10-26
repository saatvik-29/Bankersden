#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Setting up Banker\'s Den Full Stack Application...\n');

// Check if .env exists
const envPath = path.join(__dirname, 'backend', '.env');
const envExamplePath = path.join(__dirname, 'backend', '.env.example');

if (!fs.existsSync(envPath)) {
  console.log('📝 Creating .env file from template...');
  fs.copyFileSync(envExamplePath, envPath);
  console.log('✅ .env file created. Please update it with your configuration.\n');
} else {
  console.log('✅ .env file already exists.\n');
}

// Install dependencies
console.log('📦 Installing dependencies...');
try {
  execSync('npm run install-all', { stdio: 'inherit' });
  console.log('✅ Dependencies installed successfully.\n');
} catch (error) {
  console.error('❌ Error installing dependencies:', error.message);
  process.exit(1);
}

console.log('🎉 Setup complete!\n');
console.log('📋 Next steps:');
console.log('1. Update backend/.env with your configuration:');
console.log('   - MongoDB URI (or use default local MongoDB)');
console.log('   - Gemini API key from https://makersuite.google.com/app/apikey');
console.log('   - Email configuration (Gmail SMTP)');
console.log('');
console.log('2. Start MongoDB (if using local):');
console.log('   mongod');
console.log('');
console.log('3. Seed sample data (optional):');
console.log('   cd backend && node seedData.js');
console.log('');
console.log('4. Start development servers:');
console.log('   npm run dev');
console.log('');
console.log('5. Access the application:');
console.log('   - Frontend: http://localhost:5173');
console.log('   - Admin Panel: http://localhost:5173/admin/login');
console.log('   - Default admin: username=admin, password=admin123');
console.log('');
console.log('📚 For more details, check README.md');