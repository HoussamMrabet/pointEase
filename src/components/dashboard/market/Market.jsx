import React, { useState, useContext } from 'react';
import { ProductContext } from '../../../context/ProductsContext';

import './market.css';

const Market = ({order, setOrder}) => {

  const [selectedCat, setSelectedCat] = useState("All")
  const { products, updateProduct } = useContext(ProductContext);
  const categories = [...new Set(products.map(p => p.category))];

  const handleSelect = (cat) => {
    setSelectedCat(cat);
  }

  const handleOrder = (product) => {
    let newOrder = [...order];
    const index = newOrder.findIndex(i => i.id === product.id);
    if (index !== -1) {
      product.numberInStock--;
      newOrder[index].count++;
    } else {
      product.numberInStock--;
      product.count = 1;
      newOrder.push(product);
    }
    console.log(newOrder)
    updateProduct(product);
    setOrder(newOrder);
  }
  return (
    <div className='px-4 py-lg-4'>
        <div className="title mb-5 mt-5 mt-lg-0">
          <h1>Making Orders</h1>
          <small className="text-muted">Today, 20 Mar 2021, 02:34 PM</small>
        </div>

        <div className="categories d-flex flex-wrap mb-5">
          <div className="categories-items m-1"><button type="button" className={selectedCat === 'All' ? 'btn btn-primary btn-sm' : 'btn btn-outline-primary btn-sm'} onClick={()=>handleSelect("All")}>All</button></div>
          {categories.map((category,i)=>(
                <div key={i} className="categories-items m-1"><button type="button" className={selectedCat === category ? 'btn btn-primary btn-sm' : 'btn btn-outline-primary btn-sm'} onClick={()=>handleSelect(category)}>{category}</button></div>
          ))}
        </div>

        <div className="products">
            <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 row-cols-xxl-5  g-4 mx-2">
                {products.map(((product, index)=>(
                    (product.category === selectedCat || selectedCat === "All") &&
                      <div key={index} className="col p-2">
                          <div className="card">
                          <img draggable="false" src={product.image} className="card-img-top" alt={product.name}/>
                          <div className="card-body">
                              <div className='d-flex justify-content-between'>
                                  <p className="card-title fw-semibold col">{product.name}</p>
                                  <p className="card-title fw-semibold col-4 col-xxl-4" style={{textAlign:"right"}}>${product.price}</p>
                              </div>
                              {product.numberInStock > 0?
                                <button type="button" className="btn btn-outline-primary btn-sm" onClick={()=>handleOrder(product)}>Add to cart</button>
                                :
                                <button type="button" className="btn btn-outline-secondary btn-sm" disabled>Out of stock</button>
                              }
                          </div>
                          </div>
                      </div>
                  )))}
            </div>
        </div>
      </div>
  )
}

export default Market