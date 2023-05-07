import React, {useContext} from 'react';
import { ProductContext } from '../../../context/ProductsContext';

import './market.css';

const Market = () => {

  const { products, updateProduct } = useContext(ProductContext);
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div className='px-4 py-lg-4'>
        <div className="title mb-5 mt-5 mt-lg-0">
          <h1>Making Orders</h1>
          <small className="text-muted">Today, 20 Mar 2021, 02:34 PM</small>
        </div>

        <div className="categories d-flex flex-wrap mb-5">
          <div className="categories-items m-1"><button type="button" className="btn btn-primary btn-sm">All</button></div>
          {categories.map((category,i)=>(
                <div key={i} className="categories-items m-1"><button type="button" className="btn btn-outline-primary btn-sm">{category}</button></div>
          ))}
        </div>

        <div className="products">
            <div className="row row-cols-2 row-cols-md-4 g-4 mx-2">
                {products.map(((product, index)=>(
                    <div key={index} className="col p-2">
                        <div className="card">
                        <img draggable="false" src={product.image} className="card-img-top" alt={product.name}/>
                        <div className="card-body">
                            <div className='d-flex justify-content-between'>
                                <p className="card-title fw-semibold col">{product.name}</p>
                                <p className="card-title fw-semibold col-3" style={{textAlign:"right"}}>${product.price}</p>
                            </div>
                            <button type="button" className="btn btn-outline-primary btn-sm">Add to cart</button>
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