import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../assets/images/icons/logo.png'

const Nav = () => {

    const navBtn = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/designation"}>Destination</NavLink></li>
        <li><NavLink to={"/blogs"}>Blogs</NavLink></li>
        <li><NavLink to={"/contact"}>Contact</NavLink></li>
    </>

    return (
        <div className="navbar container mx-auto z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 text-white rounded-box w-52">
                        {navBtn}  
                    </ul>
                </div>
                <img src={logo} className='w-[120px]' alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1  text-white">
                   {navBtn}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to={"/login"} className="px-7 py-3 border-none font-semibold  btn bg-[#F9A51A]">Login</Link>
            </div>
        </div>
    );
};

export default Nav;