import React from 'react'
import './contact.css'
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

function Contact() {
  return (
    <div className='contact-page'>
      <div className="contact-map">
      </div>
        <div className="contact-container">
        <div className="talk">Talk To Us</div>
        <div className="contact-desc">
          
          <div className="contact-desc-column">
            <div className="contact-desc-heading">Planning A Trip ?</div>
            <a className='cont-links' href="mailto:sales@yolotrips.co.in"><span><CiMail /></span>&nbsp;sales@yolotrips.co.in</a>
            <a className='cont-links' href='tel:+919599006862'><span><MdOutlinePhone /></span>&nbsp;+919599006862</a>
            <a className='cont-links' href='tel:+919910888997'><span><FaWhatsapp /></span>&nbsp;+919910888997</a>
          </div>

        </div>
        </div>
    </div>
  )
}

export default Contact