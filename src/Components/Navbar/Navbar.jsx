import React from 'react'
import { IoIosHome } from "react-icons/io";
import {FaPhoneAlt, FaRegHeart } from "react-icons/fa";
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg'
function Navbar() {
  return (
    <>
    <div className="ls-navbar flex">
    <Link to='/'><img src={logo} alt="logo" className="company-logo" /></Link>

      <div className="ls-nav-links flex">
      <Link to='/' className="ls-link">Home</Link>
      <Link to='/testimonial' className="ls-link">Testimonial</Link>
      <Link to='/contact' className="ls-link">Contact Us</Link>
      <Link to='/about' className="ls-link">About us</Link>
      </div>
    </div>
    <div className='navbar-mobile'>
        <div className="navbar-main-container flex">
          
          <Link to='/'>
          <div className="navbar-links flex">
           <IoIosHome></IoIosHome>
           <p>Explore</p>
          </div>
          </Link>

          <Link to='/testimonial'>
          <div className="navbar-links flex">
           <FaRegHeart></FaRegHeart>
           <p>Testimonial</p>
          </div>
          </Link>

          <Link to='/contact'>
          <div className="navbar-links flex">
           <FaPhoneAlt></FaPhoneAlt>
           <p>Call Us</p>
          </div>
          </Link>

        </div>
    </div>
    </>
    
  )
}

export default Navbar