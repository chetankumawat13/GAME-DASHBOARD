import React from 'react'
import '../style/navbar.css'
import { NavLink } from 'react-router'

const NavBar = () => {
  return (
    <div className='navbar'>
       <div className="navlogo">
            <img src="https://ik.imagekit.io/ad6av31ld/HOCCO/Screenshot_2026-05-23_at_9.34.03_AM-removebg-preview.png" alt="logo" />
        </div>
        <div className="navlinks">
                <NavLink to='/' className='navlink'>
                    <i className="ri-home-3-line"></i>
                    Home
                </NavLink>
                <NavLink to='/trending' className='navlink'>
                    <i className="ri-fire-line"></i>
                    Trending
                </NavLink>
                <NavLink to='/about' className='navlink'>
                     <i className="ri-links-line"></i>
                    About
                </NavLink>
                <NavLink to='/saved' className='navlink'>
                <i className="ri-bookmark-line"></i>
                    Saved
                </NavLink>
        </div>
        <div className="navbottom">
                <NavLink to='/settings' className='navlink'>
                    <i className="ri-settings-2-line"></i>
                    Settings
                </NavLink>
                <NavLink to='/support' className='navlink'>
                    <i className="ri-wechat-line"></i>
                    Support
                </NavLink>
        </div>
    </div>
  )
}

export default NavBar