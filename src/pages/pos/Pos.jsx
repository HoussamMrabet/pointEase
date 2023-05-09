import React from 'react'

import { NavBar, PoseContent, SideBar } from '../../components/pos';

import "../posApp.scss";

const Pos = () => {
  return (
    <div className='posApp'>
      <NavBar />
      <div className="row justify-content-center" style={{ width: "100vw" }}>
          <div className="col-md-1 text-lg-center d-none d-lg-block">
              <SideBar active={"pos"}/>
          </div>
          <div className="col">
              <PoseContent />
          </div>
      </div>
    </div>
  )
}

export default Pos