// ProductContext.js
import React, { createContext, useState } from 'react';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Sausage', image: "https://i.postimg.cc/rmVL55sK/download.jpg", category: "Food", price: 4.99, numberInStock: 14 },
    { id: 2, name: 'Luisiana', image: "https://i.postimg.cc/kXtL6TsT/download-1.jpg", category: "plat", price: 7.99, numberInStock: 10 },
    { id: 3, name: 'Cheese Burger', image: "https://i.postimg.cc/PxRFNDwG/download-2.jpg", category: "Food", price: 5.99, numberInStock: 15 },
    { id: 4, name: 'Tacos', image: "https://i.postimg.cc/qB945hZZ/download-3.jpg", category: "Food", price: 4.99, numberInStock: 15 },
    { id: 5, name: 'Pizza', image: "https://i.postimg.cc/ht2YNNtP/download-4.jpg", category: "Food", price: 10.49, numberInStock: 15 },
  ]);

  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product.id === updatedProduct.id ? updatedProduct : product
    );
    setProducts(updatedProducts);
  };

  const value = {
    products,
    updateProduct,
  };

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  );
};
