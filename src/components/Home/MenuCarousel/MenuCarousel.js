import React, { useEffect, useState } from 'react';
import './MenuCarousel.css';

function MenuCarousel() {
    //get menu items from MenuProvider.json file and map them to the menu carousel
    const [menuItems, setMenuItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrevClick = () => {
      setActiveIndex(prevIndex => (prevIndex === 0 ? menuItems.length - 1 : prevIndex - 1));
    };
  
    const handleNextClick = () => {
      setActiveIndex(prevIndex => (prevIndex === menuItems.length - 1 ? 0 : prevIndex + 1));
    };

  useEffect(() => {
    // Fetch the menu data from the JSON file
    fetch('./menuprovider.json')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Update the menuItems state with the fetched data
        setMenuItems(data.menuItems);
      })
      .catch(error => {
        console.error('Error fetching menu data:', error);
      });
  }, []);
  return (
    <div className="menu-carousel">
        Our Menu
      <div className="menu-carousel__container">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className={`menu-carousel__container__item ${
              index === activeIndex ? 'active' : ''
            }`}
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <button className="carousel-navigation__button prev" onClick={handlePrevClick}>
          &lt;
        </button>
        <ul className="carousel-navigation__dots">
          {menuItems.map((_, index) => (
            <li
              key={index}
              className={`carousel-navigation__dot ${
                index === activeIndex ? 'active' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </ul>
        <button className="carousel-navigation__button next" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  )
}

export default MenuCarousel
