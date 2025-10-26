import mongoose from 'mongoose';
import Admin from './models/Admin.js';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bankersden';
    
    await mongoose.connect(mongoURI);
    
    console.log('MongoDB connected successfully');
    
    // Create default admin if it doesn't exist
    await createDefaultAdmin();
    
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

const createDefaultAdmin = async () => {
  try {
    const existingAdmin = await Admin.findOne({ username: 'admin' });
    
    if (!existingAdmin) {
      const defaultAdmin = new Admin({
        username: 'admin',
        password: 'admin123' // This will be hashed automatically
      });
      
      await defaultAdmin.save();
      console.log('Default admin created - Username: admin, Password: admin123');
    }
  } catch (error) {
    console.error('Error creating default admin:', error);
  }
};

export default connectDB;