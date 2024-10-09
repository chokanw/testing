import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Registration.css';

function Registration() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    dateOfBirth: '',
    // phoneNumber: '',
    // insurancePolicyNumber: '',
    // emergencyContact: '',
    // occupation: '',
    // primaryCarePhysician: '',
    // insuranceProvider: '',
    // allergiesHistory: '',
    // currentMedications: '',
    // pastMedicalHistory: '',
    // idType: '',
    // idNumber: '',
    // consentTreatment: false,
    // consentHealthInfo: false,
    // consentPrivacyPolicy: false
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send form data as JSON
      await axios.post('http://localhost:5000/api/register', formData);
      navigate('/login');
    } catch (error) {
      setError('Error registering user. Please try again.');
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        {error && <p className="error-message">{error}</p>}

        <section className="personal-info">
          <h2>Personal Information</h2>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="dateOfBirth"
            placeholder="Date of Birth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
          
          <input
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="insurancePolicyNumber"
            placeholder="Insurance Policy Number"
            value={formData.insurancePolicyNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="emergencyContact"
            placeholder="Emergency Contact"
            value={formData.emergencyContact}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="occupation"
            placeholder="Occupation"
            value={formData.occupation}
            onChange={handleChange}
            required
          />
          
        </section>

        
        <section className="medical-info">
          <h2>Medical Information</h2>
          <input
            type="text"
            name="primaryCarePhysician"
            placeholder="Primary Care Physician"
            value={formData.primaryCarePhysician}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="insuranceProvider"
            placeholder="Insurance Provider"
            value={formData.insuranceProvider}
            onChange={handleChange}
            required
          />
          <textarea
            name="allergiesHistory"
            placeholder="Allergies/Family Medical History"
            value={formData.allergiesHistory}
            onChange={handleChange}
            required
          />
          <textarea
            name="currentMedications"
            placeholder="Current Medications"
            value={formData.currentMedications}
            onChange={handleChange}
            required
          />
          <textarea
            name="pastMedicalHistory"
            placeholder="Past Medical History"
            value={formData.pastMedicalHistory}
            onChange={handleChange}
            required
          />
        </section>

        <section className="identification">
          <h2>Identification and Verification</h2>
          <select
            name="idType"
            value={formData.idType}
            onChange={handleChange}
            required
          >
            <option value="">Select ID Type</option>
            <option value="driverLicense">Driver's License</option>
            <option value="passport">Passport</option>
            <option value="stateId">State ID</option>
          </select>
          <input
            type="text"
            name="idNumber"
            placeholder="ID Number"
            value={formData.idNumber}
            onChange={handleChange}
            required
          />
        </section>

        <section className="consent">
          <h2>Consent and Privacy</h2>
          <label>
            <input
              type="checkbox"
              name="consentTreatment"
              checked={formData.consentTreatment}
              onChange={handleChange}
              required
            />
            I consent to treatment
          </label>
          <label>
            <input
              type="checkbox"
              name="consentHealthInfo"
              checked={formData.consentHealthInfo}
              onChange={handleChange}
              required
            />
            I consent to the use of my health information
          </label>
          <label>
            <input
              type="checkbox"
              name="consentPrivacyPolicy"
              checked={formData.consentPrivacyPolicy}
              onChange={handleChange}
              required
            />
            I agree to the privacy policy
          </label>
        </section>
        

        <button type="submit">Submit and Continue</button>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </form>
    </div>
  );
}

export default Registration;