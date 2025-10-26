import mongoose from 'mongoose';
import dotenv from 'dotenv';
import ChatData from './models/ChatData.js';

dotenv.config();

const seedChatData = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/bankersden';
    await mongoose.connect(mongoURI);
    
    console.log('Connected to MongoDB');
    
    // Clear existing data
    await ChatData.deleteMany({});
    
    // Sample data
    const sampleData = [
      {
        type: 'paragraph',
        title: 'About Banker\'s Den',
        content: 'Banker\'s Den is a leading financial services company that helps individuals and businesses secure loans from over 275+ partner banks and NBFCs. We specialize in home loans, personal loans, business loans, car loans, education loans, and more. Our expert team provides personalized financial solutions with competitive interest rates and quick approval processes.',
        isActive: true
      },
      {
        type: 'paragraph',
        title: 'Our Services',
        content: 'We offer comprehensive financial services including loan facilitation, EMI calculations, credit score checking, insurance products, and credit card applications. Our digital platform makes it easy to compare loan options, calculate EMIs, and apply for loans online with minimal documentation.',
        isActive: true
      },
      {
        type: 'qa',
        title: 'Loan Processing Time',
        question: 'How long does it take to process a loan application?',
        answer: 'Loan processing time varies by loan type and bank. Personal loans can be approved within 24-48 hours, while home loans typically take 7-15 days. Business loans may take 3-7 days depending on documentation completeness.',
        isActive: true
      },
      {
        type: 'qa',
        title: 'Interest Rates',
        question: 'What are the current interest rates for different loans?',
        answer: 'Interest rates vary by loan type and your credit profile. Personal loans start from 10.5% p.a., home loans from 8.5% p.a., car loans from 7.5% p.a., and business loans from 9.5% p.a. Rates are subject to bank policies and your eligibility.',
        isActive: true
      },
      {
        type: 'qa',
        title: 'Required Documents',
        question: 'What documents are required for loan applications?',
        answer: 'Common documents include: Identity proof (Aadhar/PAN), Address proof, Income proof (salary slips/ITR), Bank statements (3-6 months), Employment proof, and property documents (for secured loans). Specific requirements may vary by loan type and bank.',
        isActive: true
      },
      {
        type: 'qa',
        title: 'Eligibility Criteria',
        question: 'What are the eligibility criteria for loans?',
        answer: 'Basic eligibility includes: Age 21-65 years, minimum monthly income ₹25,000 for personal loans, good credit score (650+), stable employment history, and valid KYC documents. Specific criteria vary by loan type and amount.',
        isActive: true
      }
    ];
    
    await ChatData.insertMany(sampleData);
    console.log('Sample chat data inserted successfully');
    
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedChatData();