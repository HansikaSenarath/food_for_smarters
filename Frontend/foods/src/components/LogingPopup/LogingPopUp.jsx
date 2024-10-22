import React, { useState } from 'react'
import './logingpopup.css'
import { assets } from '../../assets/frontend_assets/assets'

const LogingPopUp = ({setShowLogin}) => {
    const [currantState,setCurrentState] = useState("Login")
  return (
    <div className='loging-popup'>
    <form className='login-popup-container' >
        <div className="login-popup-title">
            <h2>{currantState}</h2>
            <img onClick={()=>setShowLogin(false)}  src={assets.cross_icon}  alt="" />
        </div>
        <div className="login-popup-input">
            {currantState=="Login" ? <></>:<input type="text" placeholder='Your Name' required />}
            <input type="email" placeholder='Your email' required />
            <input type="password" placeholder='password' required /> 

        </div>
        <button>{currantState== "sign Up"? "create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" required/>
            <p>By continuing i agree to the terms and coditions</p>

        </div>
        {currantState==="Login"
        ? <p>Create a new Account?<span onClick={()=>setCurrentState("Sign Up")}>Click Here</span> </p>
       :   <p>Already Have an account?<span onClick={()=>setCurrentState("Login")}>Login Here</span></p>
    }
       
       
    </form>
    </div>
  )
}

export default LogingPopUp
