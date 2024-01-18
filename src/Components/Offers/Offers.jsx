import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/exclusive_image.png'

const Offers = () => {
  const handleButtonClick = () => {
    const currentScrollPosition = window.scrollY;
    // Scroll down by adding 30 pixels to the current position
    window.scrollTo(0, currentScrollPosition + 800);
  };

  return (
    <div className='offers'>
        <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Products from Best Sellers</p>
        
          <button onClick={handleButtonClick}>Check Now</button>
          {/* <Link to="/new-collections">
          </Link> */}
        </div>
        <div className="offers-right">
        <img src={exclusive_image} alt=""/>
        </div>
    </div>
  )
}
export default Offers
