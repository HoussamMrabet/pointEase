import React from 'react'

import { Link } from 'react-router-dom';
import { AiFillAppstore, AiFillDashboard, AiFillSetting } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { CgLogOut } from 'react-icons/cg';

import "./sidebar.css";

const SideBar = ({active}) => {
  return (
    <>
      <div className="d-flex flex-lg-column justify-content-between sidebar py-3">
        <div className="d-flex flex-lg-column justify-content-around">
          <div className='mb-lg-5'>logo</div>
          
          <div>
            <Link to="/pos" style={{ color: "black" }}><div className={active === "pos"? "sidebar-items my-2 p-2 active":"sidebar-items my-2 p-2"}><AiFillAppstore /></div></Link>
            <Link to="/stock" style={{ color: "black" }}><div className={active === "stock"? "sidebar-items my-2 p-2 active":"sidebar-items my-2 p-2"}><FiPackage /></div></Link>
            <Link to="/dashboard" style={{ color: "black" }}><div className={active === "dashboard"? "sidebar-items my-2 p-2 active":"sidebar-items my-2 p-2"}><AiFillDashboard /></div></Link>
          </div>
        </div>

        <div>
          <Link to="/settings" style={{ color: "black" }}><div className={active === "settings"? "sidebar-items my-2 p-2 active":"sidebar-items my-2 p-2"}><AiFillSetting /></div></Link>
          <Link to="/" style={{ color: "black" }}><div className="sidebar-items my-2 p-2"><CgLogOut /></div></Link>
        </div>
      </div>
    </>
  )
}

export default SideBar