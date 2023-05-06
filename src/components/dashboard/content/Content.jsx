import React from 'react'
import Market from '../market/Market'
import Cart from '../cart/Cart'

const Content = () => {
  return (
    <div className="row justify-content-center">   
      <div className="col-lg-9">
        <Market />
      </div>
      <div className="col">
        <Cart />
      </div>   
    </div>
  )
}

export default Content