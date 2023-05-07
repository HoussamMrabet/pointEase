import React from 'react'

import "./cart.css"

const Cart = () => {
  return (
    <div className="cart d-flex flex-column justify-content-between p-5 p-lg-3">
        <div className='d-flex flex-column' style={{overflowY: "hidden"}}>
          <h4 className="cart-title">Order</h4>
          <hr />
          <div className="cart-products">
            <div className="item d-flex">
              <img className='col-1' draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" alt="..."/>
              <div className="details d-flex flex-column px-1 col-6">
                <small className="categorie">
                  <span style={{fontSize: "12px", color: "gray"}}>Category: </span>Food
                </small>
                <small className="title">
                  Burger King
                </small>
                <span class="badge text-bg-secondary" style={{width:"50px"}}>$99</span>
              </div>
              <div className="counter d-flex align-items-center text-center col">
                <span class="setCount decrement">-</span>
                <span className='itemCount mx-2'>20</span>
                <span class="setCount increment">+</span>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex flex-column'>
          <hr />
          <div className='totalItems d-flex justify-content-between'>
            <h6>Total Items:</h6>
            <h6 className="countItems" style={{textAlign: "right"}}>0(items)</h6>
          </div>
          <div className="total d-flex justify-content-between">
            <h5>Total:</h5>
            <h5 className='totalPrice' style={{textAlign: "right"}}>$0</h5>
          </div>
          <hr />
          <button type="button" class="btn btn-primary mb-1">Pay Now</button>
          <button type="button" class="btn btn-light">Cancel</button>
        </div>
    </div>
  )
}

export default Cart