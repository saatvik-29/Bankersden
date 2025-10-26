import mongoose from 'mongoose';

const chatDataSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['paragraph', 'qa']
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  // For Q&A pairs
  question: String,
  answer: String,
  
  isActive: {
    type: Boolean,
    default: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

chatDataSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model('ChatData', chatDataSchema);