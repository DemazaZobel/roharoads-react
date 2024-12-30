import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';

function SignUp() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessAddressLine1, setBusinessAddressLine1] = useState('');
  const [businessCity, setBusinessCity] = useState('');
  const [businessState, setBusinessState] = useState('');
  const [businessZipCode, setBusinessZipCode] = useState('');
  const [businessLicenseNumber, setBusinessLicenseNumber] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [licenseIssuedDate, setLicenseIssuedDate] = useState('');
  const [licenseExpiredDate, setLicenseExpiredDate] = useState('');
  const [taxIdentificationNumber, setTaxIdentificationNumber] = useState('');

  async function handleSignUp(event) {
    event.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        'Password must be at least 8 characters long, include an uppercase letter, a number, and a special character.'
      );
      return;
    }

    const data = {
      first_name: firstName,
      last_name: lastName,
      email_address: email,
      phone_number: phoneNumber,
      company_name: companyName,
      business_address_line_1: businessAddressLine1,
      business_city: businessCity,
      business_state: businessState,
      business_zip_code: businessZipCode,
      business_license_number: businessLicenseNumber,
      business_type: businessType,
      date_of_birth: dateOfBirth,
      license_issued_date: licenseIssuedDate,
      license_expired_date: licenseExpiredDate,
      tax_identification_number: taxIdentificationNumber,
    };

    try {
      const response = await axios.post(
        'https://api.tillahealthinsurance.com/brokers/',
        data
      );

      console.log('Sign-up successful:', response.data);

      login();
      navigate('/');
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.email || 'An error occurred. Please try again.');
        alert('Error: ' + JSON.stringify(err.response.data));
      } else {
        setError('Sign-up failed. Please try again.');
      }
    }
  }

  return (
    <div className="min-h-screen p-10 bg-gradient-to-r from-red-500 to-gray-900 flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-3xl p-10">
        {error && (
          <p className="text-red-600 text-center mb-5">⚠️ {error}</p>
        )}

        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          Create an Account
        </h1>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-300 focus:outline-none"
            />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-300 focus:outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-300 focus:outline-none"
          />

         
          <div className="grid grid-cols-2 gap-4">
            <input
              type="tel"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-300 focus:outline-none"
            />
            <input
              type="text"
              placeholder="Company Name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-red-300 focus:outline-none"
            />
          </div>

         
          <input
            type="text"
            value={businessAddressLine1}
            onChange={(e) => setBusinessAddressLine1(e.target.value)}
            placeholder="Business Address Line 1"
            className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="text"
            value={businessCity}
            onChange={(e) => setBusinessCity(e.target.value)}
            placeholder="Business City"
            className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="text"
            value={businessState}
            onChange={(e) => setBusinessState(e.target.value)}
            placeholder="Business State"
            className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="text"
            value={businessZipCode}
            onChange={(e) => setBusinessZipCode(e.target.value)}
            placeholder="Business Zip Code"
            className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="text"
            value={businessLicenseNumber}
            onChange={(e) => setBusinessLicenseNumber(e.target.value)}
            placeholder="Business License Number"
            className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <input
            type="text"
            value={businessType}
            onChange={(e) => setBusinessType(e.target.value)}
            placeholder="Business Type"
            className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <div className="w-full">
            <label htmlFor="dateOfBirth" className="block text-gray-600 mb-1">
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="licenseIssuedDate" className="block text-gray-600 mb-1">
              License Issued Date:
            </label>
            <input
              type="date"
              id="licenseIssuedDate"
              value={licenseIssuedDate}
              onChange={(e) => setLicenseIssuedDate(e.target.value)}
              className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <div className="w-full">
            <label htmlFor="licenseExpiredDate" className="block text-gray-600 mb-1">
              License Expired Date:
            </label>
            <input
              type="date"
              id="licenseExpiredDate"
              value={licenseExpiredDate}
              onChange={(e) => setLicenseExpiredDate(e.target.value)}
              className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>
          <input
            type="text"
            value={taxIdentificationNumber}
            onChange={(e) => setTaxIdentificationNumber(e.target.value)}
            placeholder="Tax Identification Number"
            className="w-full h-12 text-center rounded-lg border border-gray-300 outline-none focus:ring-2 focus:ring-red-500"
            required
          />


          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-lg shadow-md hover:shadow-lg hover:from-red-500 hover:to-red-600 focus:ring focus:ring-red-300 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
