import React, { useState } from 'react';
import Navbar from './components/navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'; // Make sure to import the Home component
import Cart from './pages/Cart/Cart';
import Placeholder from './pages/Placeholder/Placeholder';
import Footer from './components/Footer/Footer';
import LogingPopUp from './components/LogingPopup/LogingPopUp';

function App() {
  const [showLogin,setShowLogin] = useState(false)
  return (
    <>
    {showLogin?<LogingPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin ={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeholder' element={<Placeholder />} />
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
