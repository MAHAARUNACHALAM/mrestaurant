import React from 'react'

import Background from '../../../assets/images/hero_image.png'
import './RestaurantTagCard.css';
function RestaurantTagCard() {


  const handleReserveClick = () => {
    window.location.href = '/reservation';
  };
  return (
    <div className='container'>
        <img src={Background} className="hero-image" alt="Hero" />
        <div className="content-overlay ">
            <div className="text-container">
            <h2>Drink</h2>
            <h2>Eat</h2>
            <h2>Chill</h2>
        </div>
        <div className="quote-container">
            <p>Enjoy the best chill vibes while your
            <br />stay at heavenly Chennai</p>
        </div>
        <div className="button-container">
            <button className="reserve-button" onClick={handleReserveClick}>Reserve Now</button>
        </div>
        </div>
    </div>
  )
}

export default RestaurantTagCard
