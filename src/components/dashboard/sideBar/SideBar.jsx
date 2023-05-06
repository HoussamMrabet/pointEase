import React from 'react'

import { AiFillAppstore, AiFillDashboard, AiFillSetting } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { CgLogOut } from 'react-icons/cg';

import "./sidebar.css";

const SideBar = () => {
  return (
    <>
      <div className="d-flex flex-lg-column justify-content-between sidebar py-3">
        <div className="d-flex flex-lg-column justify-content-around">
          <div className='mb-lg-5'>logo</div>
          
          <div>
            <div className="sidebar-items my-2 p-2 active"><AiFillAppstore /></div>
            <div className="sidebar-items my-2 p-2"><FiPackage /></div>
            <div className="sidebar-items my-2 p-2"><AiFillDashboard /></div>
          </div>
        </div>

        <div>
          <div className="sidebar-items my-2 p-2"><AiFillSetting /></div>
          <div className="sidebar-items my-2 p-2"><CgLogOut /></div>
        </div>
      </div>
    </>
  )
}

export default SideBar