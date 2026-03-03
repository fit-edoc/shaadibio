const mongoose = require('mongoose');

// Sub-schemas for clean organization
const personalInfoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dob: { type: Date, required: true },
  height: { type: String },
  weight: { type: String },
  education: { type: String },
  profession: { type: String },
  income: { type: String }, // Can be hidden via privacy settings
  photoUrl: { type: String }, // URL from S3 or Cloudinary
});

const familyInfoSchema = new mongoose.Schema({
  fatherName: { type: String },
  fatherOccupation: { type: String },
  motherName: { type: String },
  motherOccupation: { type: String },
  siblings: { type: String },
  nativePlace: { type: String },
});

const horoscopeSchema = new mongoose.Schema({
  rashi: { type: String },
  nakshatra: { type: String },
  gotra: { type: String },
  birthTime: { type: String },
  birthPlace: { type: String },
});

// Main Biodata Schema
const biodataSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    // Design & Layout Preferences (Hooks right into your UI components)
    templateId: {
      type: String,
      default: 'modern-minimal',
    },
    themeColor: {
      type: String,
      default: '#8B0000', // Hex code to pass into frontend style props
    },
    fontFamily: {
      type: String,
      default: 'Inter',
    },
    
    // Privacy Controls (FR-16)
    privacySettings: {
      hideIncome: { type: Boolean, default: false },
      hideContact: { type: Boolean, default: false },
    },
    
    // PDF Security (FR-14)
    isPasswordProtected: { type: Boolean, default: false },
    pdfPassword: { type: String }, 

    // Embedded Data Sections
    personalInfo: personalInfoSchema,
    familyInfo: familyInfoSchema,
    horoscope: horoscopeSchema,
  },
  {
    timestamps: true,
  }
);

const bioModel = mongoose.model('Biodata', biodataSchema);

module.exports = bioModel