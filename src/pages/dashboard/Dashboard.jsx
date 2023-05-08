import React from 'react'

import { NavBar, Content, SideBar } from '../../components/dashboard';

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <NavBar />
      <div className="row justify-content-center" style={{ width: "100vw" }}>
          <div className="col-md-1 text-lg-center d-none d-lg-block">
              <SideBar />
          </div>
          <div className="col">
              <Content />
          </div>
      </div>
    </div>
  )
}

export default Dashboard