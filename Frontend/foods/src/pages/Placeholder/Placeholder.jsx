import React, { useContext } from 'react'
import './placeholder.css'
import { StoreContext } from '../../Context/StoreContext'

function Placeholder() {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="place-order"action="">
      <div className="place-order-left">
        <p className="title">
          Delivary Information
        </p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name'/>
        </div>
        <input type="email" placeholder='Email'/>
        <input type="text" placeholder='Street'/>
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder=' State'/>
        </div>
         <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder=' Country'/>
      </div>
      <input type="text" placeholder='phone' />
      </div>
      
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
          <div className="cart-total-details">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivary Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
          </div>
         <button >PROCEED TO PAYMENT</button> 
        </div>

      </div>
    </form>
  )
}

export default Placeholder
