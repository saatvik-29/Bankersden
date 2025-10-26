import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  applicationNumber: {
    type: String,
    required: true,
    unique: true
  },
  type: {
    type: String,
    required: true,
    enum: ['contact', 'loan']
  },
  status: {
    type: String,
    required: true,
    enum: ['active', 'processing', 'completed'],
    default: 'active'
  },
  // Contact form fields
  full_name: String,
  email: {
    type: String,
    required: true
  },
  phone: String,
  category: String,
  message: String,
  
  // Loan application fields
  loanType: String,
  loanAmount: Number,
  monthlyIncome: Number,
  employmentType: String,
  companyName: String,
  workExperience: Number,
  panNumber: String,
  aadharNumber: String,
  address: String,
  city: String,
  state: String,
  pincode: String,
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

leadSchema.pre('save', function(next) {
  this.updatedAt = new Date();
  next();
});

export default mongoose.model('Lead', leadSchema);