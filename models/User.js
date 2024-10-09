const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dateOfBirth: { type: Date, required: true },
  phoneNumber: { type: String, required: true },
  insurancePolicyNumber: { type: String, required: true },
  emergencyContact: { type: String, required: true },
  occupation: { type: String, required: true },
  primaryCarePhysician: { type: String, required: true },
  insuranceProvider: { type: String, required: true },
  allergiesHistory: { type: String },
  currentMedications: { type: String },
  pastMedicalHistory: { type: String },
  idType: { type: String, required: true },
  idNumber: { type: String, required: true },
  consentTreatment: { type: Boolean, required: true },
  consentHealthInfo: { type: Boolean, required: true },
  consentPrivacyPolicy: { type: Boolean, required: true },
});

module.exports = mongoose.model('User', UserSchema);