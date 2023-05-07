import React, { useContext } from 'react';
import { ProductContext } from '../../../context/ProductsContext';

import "./cart.css"

const Cart = ({order, setOrder}) => {

  const { products, updateProduct } = useContext(ProductContext);

  const cancelOrder = () => {
    let i,j;
    for(i = 0; i < products.length; i++)
      for(j = 0; j < order.length; j++)
        if(products[i].id === order[j].id){
          let product = products[i];
          product.numberInStock += order[j].count;
          updateProduct(product);
        }
    setOrder([]);
  }

  const incrementHandle = (item) => {
    let product = [];
    products.map(p=>(
      (p.id === item.id)? product = p:null
    ));
    console.log(product.numberInStock)
    let newOrder = [...order];
    const index = newOrder.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      newOrder[index].count++;
      newOrder[index].numberInStock--;
    }
    setOrder(newOrder);
  }

  const decrementHandle = (item) => {
    let product = [];
    products.map(p=>(
      (p.id === item.id)? product = p:null
    ));
    console.log(product.numberInStock)
    let newOrder = [...order];
    const index = newOrder.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      newOrder[index].numberInStock++;
      if (newOrder[index].count > 1) {
        newOrder[index].count--;
      } else {
        newOrder.splice(index, 1);
      }
    }
    setOrder(newOrder);
  }

  return (
    <div className="cart d-flex flex-column justify-content-between p-5 p-lg-3">
        <div className='d-flex flex-column' style={{overflowY: "hidden"}}>
          <h4 className="cart-title">Order</h4>
          <hr />
          <div className="cart-products">
            {order.map((item, index)=>(
              <div key={index} className="item d-flex">
                <img className='col-1' draggable="false" src={item.image} alt={item.name}/>
                <div className="details d-flex flex-column px-1 col-6">
                  <small className="categorie">
                    <span style={{fontSize: "12px", color: "gray"}}>Category: </span>{item.category}
                  </small>
                  <small className="title">
                    {item.name}
                  </small>
                  <span className="badge text-bg-secondary" style={{width:"50px"}}>${item.price}</span>
                </div>
                <div className="counter d-flex align-items-center text-center col">
                  <button className="setCount decrement" onClick={()=>decrementHandle(item)}>-</button>
                  <span className='itemCount mx-2'>{item.count? item.count:"1"}</span>
                  <button className="setCount increment" disabled={item.numberInStock > 0? false:true} onClick={()=>incrementHandle(item)}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='d-flex flex-column'>
          <hr />
          <div className='totalItems d-flex justify-content-between'>
            <h6>Total Items:</h6>
            <h6 className="countItems" style={{textAlign: "right"}}>{order.reduce((totalPrice, item)=>{return totalPrice + item.count},0)}(items)</h6>
          </div>
          <div className="total d-flex justify-content-between">
            <h5>Total:</h5>
            <h5 className='totalPrice' style={{textAlign: "right"}}>${order.reduce((totalPrice, item)=>{return totalPrice + item.price*item.count},0).toFixed(2)}</h5>
          </div>
          <hr />
          <button type="button" className="btn btn-primary mb-1">Pay Now</button>
          <button type="button" className="btn btn-light" disabled={order.length < 1 && true} onClick={cancelOrder}>Cancel</button>
        </div>
    </div>
  )
}

export default Cart