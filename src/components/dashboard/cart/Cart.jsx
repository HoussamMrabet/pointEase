import React from 'react'

import "./cart.css"

const Cart = () => {
  return (
    <div className="cart d-flex flex-column p-3">
        <h4 className="cart-title">Order</h4>
        <hr />
        <div className="cart-products">products</div>
        <hr />
        <cart className="details">details</cart>
    </div>
  )
}

export default Cart