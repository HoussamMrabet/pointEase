import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { ProductProvider } from './context/ProductsContext';
import { Home, Pos, Login, Stock, Dashboard, Settings, NotFound } from './pages';
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
    errorElement: <NotFound />
  },
  {
    path: "/pos",
    element: <ProductProvider><Pos /></ProductProvider>,
  },
  {
    path: "/stock",
    element: <Stock />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/settings",
    element: <Settings />,
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