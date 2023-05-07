import React from 'react';

import './market.css';

const Market = () => {
  return (
    <div className='px-4 py-lg-4'>
        <div className="title mb-5 mt-5 mt-lg-0">
          <h1>Making Orders</h1>
          <small class="text-muted">Today, 20 Mar 2021, 02:34 PM</small>
        </div>

        <div className="categories d-flex flex-wrap mb-5">
          <div class="categories-items m-1"><button type="button" class="btn btn-primary btn-sm">All</button></div>
          <div class="categories-items m-1"><button type="button" class="btn btn-outline-primary btn-sm">Food</button></div>
          <div class="categories-items m-1"><button type="button" class="btn btn-outline-primary btn-sm">Desert</button></div>
          <div class="categories-items m-1"><button type="button" class="btn btn-outline-primary btn-sm">Drink</button></div>

        </div>

        <div className="products">
            <div class="row row-cols-2 row-cols-md-4 g-4 text-center">
                <div class="col p-2">
                    <div class="card">
                    <img draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-title fw-semibold">burger - $7.99</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Add to cart</button>
                    </div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="card">
                    <img draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-title fw-semibold">burger - $7.99</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Add to cart</button>
                    </div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="card">
                    <img draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-title fw-semibold">burger - $7.99</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Add to cart</button>
                    </div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="card">
                    <img draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-title fw-semibold">burger - $7.99</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Add to cart</button>
                    </div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="card">
                    <img draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-title fw-semibold">burger - $7.99</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Add to cart</button>
                    </div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="card">
                    <img draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-title fw-semibold">burger - $7.99</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Add to cart</button>
                    </div>
                    </div>
                </div>
                <div class="col p-2">
                    <div class="card">
                    <img draggable="false" src="https://ik.imagekit.io/demo/medium_cafe_B1iTdD0C.jpg" class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <p class="card-title fw-semibold">burger - $7.99</p>
                        <button type="button" class="btn btn-outline-primary btn-sm">Add to cart</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default Market