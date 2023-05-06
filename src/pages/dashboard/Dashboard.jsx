import React from 'react'

import { Content, SideBar } from '../../components/dashboard';

const Dashboard = () => {
  return (
    <div className="row justify-content-center" style={{ width: "100%" }}>
        <div className="col-lg-1 text-center">
            <SideBar />
        </div>
        <div className="col">
            <Content />
        </div>
    </div>
  )
}

export default Dashboard