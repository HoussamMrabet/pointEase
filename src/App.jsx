import React from 'react'

import { ProductProvider } from './context/ProductsContext';
import { Dashboard } from './pages';

const App = () => {

  return (
    <ProductProvider>
        <Dashboard />
    </ProductProvider>
  )
}

export default App