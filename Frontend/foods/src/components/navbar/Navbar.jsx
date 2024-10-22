import React, { useContext, useState } from 'react';
import './navbar.css';
import { assets } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

function Navbar({setShowLogin}) {
  const [menu, setMenu] = useState("home"); // Correct useState syntax

  const {getTotalCartAmount} =useContext(StoreContext);
  return (
    <div className='navbar'>
      <Link to ='/'><img src={assets.logo} alt="" className="logo" /> </Link>
      <ul className="navbar-menu">

        <Link to ='/' className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>Home</Link>
        <a href='#explore-menu' className={menu === "Menu" ? "active" : ""} onClick={() => setMenu("Menu")}>Menu</a>
        <a href='#app-download' className={menu === "Mobile-app" ? "active" : ""} onClick={() => setMenu("Mobile-app")}>Mobile App</a>
        <a href='#footer' className={menu === "Contact-us" ? "active" : ""} onClick={() => setMenu("Contact-us")}>Contact Us</a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt='' />
        <div className="navbar-search-icon">
         <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div> 
        </div>
        <button className='sign-in' onClick={()=>setShowLogin(true)} >Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
