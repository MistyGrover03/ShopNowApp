import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LoginSignup.css';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreeChecked, setAgreeChecked] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSignup = async () => {
    try {
      if (!agreeChecked) {
        // Set an error message if the checkbox is not selected
        setErrorMessage('Please agree to the terms of use and privacy policy.');
        return;
      }

     
      setErrorMessage('');
      setSuccessMessage('');

      const response = await axios.post('http://localhost:5000/login', {
      name,
      email,
      password,
    });

    setSuccessMessage('User created successfully!');
    console.log(response.data);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMessage('User with this email already exists');
      } else {
        setErrorMessage('An error occurred while creating the user.');
      }
    }
  };
  
  const handleCheckboxChange = (e) => {
    setAgreeChecked(e.target.checked);
    // Clear the error message when the checkbox is changed
    setErrorMessage('');
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
        <button
          onClick={handleSignup}
          disabled={!agreeChecked}
          style={{
            backgroundColor: agreeChecked ? 'coral' : 'lightgray',
            cursor: agreeChecked ? 'pointer' : 'not-allowed',
          }}
        >
          Continue
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
        <p className="loginsignup-login">Already have an account? <span>Login here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' onChange={handleCheckboxChange} />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
