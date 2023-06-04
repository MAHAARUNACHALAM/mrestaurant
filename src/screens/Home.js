import React from 'react'
import Header from '../components/Home/Header/Header'
import RestaurantTagCard from '../components/Home/RestaurantTag/RestaurantTagCard'
import './Home.css';

function Home() {
  return (
    <div className='home'>
      <Header className="header" />
      <RestaurantTagCard className="restaurant-tag-card" />
    </div>
  )
}

export default Home
