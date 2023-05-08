import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProductProvider } from './context/ProductsContext';
import { Home, Dashboard, Login } from './pages';
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
    element: <Login />,
  },
]);

const App = () => {

  return (
    <RouterProvider router={router} />
  )
}

export default App