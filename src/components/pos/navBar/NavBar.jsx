import React from 'react'

import { AiFillAppstore, AiFillDashboard, AiFillSetting } from 'react-icons/ai';
import { FiPackage } from 'react-icons/fi';
import { CgLogOut } from 'react-icons/cg';

import "./navBar.css";

const NavBar = () => {
  return (
    <div className='navbar px-4 d-flex justify-content-between d-lg-none col-12'>
        <div className='col-2'>logo</div>
          
        <div className='d-flex justify-content-start col-6'>
            <div className="nav-items active py-2"><AiFillAppstore /></div>
            <div className="nav-items py-2"><FiPackage /></div>
            <div className="nav-items py-2"><AiFillDashboard /></div>
            <div className="nav-items py-2"><AiFillSetting /></div>
        </div>

        <div className='d-flex col-2'>
            <div className="nav-items py-2"><CgLogOut /></div>
        </div>
    </div>
  )
}

export default NavBar