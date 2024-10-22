import React from 'react';
import './explormenu.css';
import { menu_list } from '../../assets/frontend_assets/assets';

const ExplorMenu = ({ category, setCategory }) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Choose our delicious menu</p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div 
              onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
              key={index} 
              className="explore-menu-list-item"
            >
              <img 
                className={category === item.menu_name ? "active" : ""} 
                src={item.menu_image} 
                alt={item.menu_name} 
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
}

export default ExplorMenu;
