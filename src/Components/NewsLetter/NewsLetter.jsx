

import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubscribe = () => {
    // Perform your subscription logic here
    // For demonstration purposes, let's assume a successful subscription
    // You may replace this with your actual subscription logic

    // Display success message
    setSuccessMessage('You have successfully subscribed!');
  };

  const handleEmailChange = (e) => {
    // Reset success message when the user starts typing in the email input
    setSuccessMessage('');
    setEmail(e.target.value);
  };

  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offers On Your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input
          type="email"
          placeholder='Your Email ID'
          value={email}
          onChange={handleEmailChange}
        />
        <button onClick={handleSubscribe}>Subscribe</button>
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}
    </div>
  );
};

export default NewsLetter;
