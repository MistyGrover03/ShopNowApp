import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/signup', {
        name,
        email,
        password,
      });
  
      console.log(response.data);
    } catch (error) {
      // Handle AxiosError
      if (error.isAxiosError) {
        // Log detailed information about the error
        console.error('AxiosError:', error);
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else {
        // Log other types of errors
        console.error('Error:', error.message);
      }
    }
  };
  
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' onChange={(e) => setName(e.target.value)} />
          <input type="email" placeholder='Email Address' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={handleSignup}>Continue</button>
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
