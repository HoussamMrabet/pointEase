import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProductProvider } from './context/ProductsContext';
import { Home, Dashboard } from './pages';
import { NavBar, ScrollToTop, Footer } from './components/home';

import "./app.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div className="App">
        <NavBar />
        <ScrollToTop />
          <Home />
        <Footer />
      </div>,
  },
  {
    path: "/pos",
    element: <ProductProvider><Dashboard /></ProductProvider>,
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
]);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App