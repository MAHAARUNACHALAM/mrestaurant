import React from 'react'
import Header from '../../components/Home/Header/Header'
import RestaurantTagCard from '../../components/Home/RestaurantTag/RestaurantTagCard'
import './Home.css';
import MenuCarousel from '../../components/Home/MenuCarousel/MenuCarousel';

function Home() {
  return (
    <div className='home'>
      <Header className="header" />
      <RestaurantTagCard className="restaurant-tag-card" />
      <MenuCarousel className="menu-carousel" />
    </div>
  )
}

export default Home
