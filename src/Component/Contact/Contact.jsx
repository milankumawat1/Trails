import React from 'react'
import './contact.css'
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";


function Contact() {
  return (
    <div className='contact-page'>
    
        <div className="contact-container">
        <div className="talk">Talk To Us</div>
        <div className="contact-desc flex">
          
          <div className="contact-desc-column">
            <div className="contact-desc-heading">Planning A Trip ?</div>
            <a className='cont-links' href="mailto:sales@yolotrips.co.in"><span><CiMail /></span>&nbsp;sales@yolotrips.co.in</a>
            <a className='cont-links' href='tel:+919599006862'><span><MdOutlinePhone /></span>&nbsp;+919599006862</a>
            <a className='cont-links' href='tel:+919599253573'><span><MdOutlinePhone /></span>&nbsp;+919599253573</a>
            <a className='cont-links' href='tel:+919910888997'><span><FaWhatsapp /></span>&nbsp;+919910888997</a>
          </div>

          <div className="contact-desc-column">
            <div className="contact-desc-heading">Address</div>
            <p className='cont-links'>Vaishali, Ghaziabad</p>
          </div>

          <div className="contact-desc-column">
            <div className="contact-desc-heading">Social links</div>
            <a className='cont-links' href='..'><span><LuFacebook></LuFacebook></span>&nbsp;<a className='cont-links' href='https://www.instagram.com/yolotripss?igsh=MWliZ3R4Y28wb3AxZg%3D%3D&utm_source=qr'><span><FaInstagram></FaInstagram></span>&nbsp;</a> <a className='cont-links' href='..'><span><CiLinkedin></CiLinkedin></span>&nbsp;</a> <a className='cont-links' href='..'><span><CiYoutube></CiYoutube></span>&nbsp;</a> <a className='cont-links' href='..'><span><CiTwitter></CiTwitter></span>&nbsp;</a></a>
          </div>

        </div>
        </div>
    </div>
  )
}

export default Contact