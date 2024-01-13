import React from 'react'
import { IoIosHome } from "react-icons/io";
import './Navbar.css'
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.svg'
function Navbar() {
  return (
    <>
    <div className="ls-navbar flex">
      <img src={logo} alt="logo" className="company-logo" />

      <div className="ls-nav-links flex">
      <Link to='/' className="ls-link">Home</Link>
      <Link to='/testimonial' className="ls-link">Testimonial</Link>
      <Link to='/' className="ls-link">Contact Us</Link>
      <Link to='/' className="ls-link">About us</Link>
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
           <IoIosHome></IoIosHome>
           <p>Testimonial</p>
          </div>
          </Link>

          <a href='/'>
          <div className="navbar-links flex">
           <IoIosHome></IoIosHome>
           <p>Explore</p>
          </div>
          </a>

        </div>
    </div>
    </>
    
  )
}

export default Navbar