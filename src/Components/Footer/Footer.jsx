import React from 'react'
import '../Footer/footer.css'
import company from '../../Assets/company.avif'
import video from '../../Assets/secondvideo.mp4'
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { CiYoutube } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";

// const images=[
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
//     {
//         imgsrc: {company}
//     },
// ]
function Footer() {
  return (
    <div className='footer'>
        <div className="partners-block">
            <h2>Partners with best in industry</h2>

            <div className="partners-image-container flex">
              <img src={company} alt="" className="partner-logos" />
            </div>
         
        </div>

         <hr className="partners-underline" />
         <div className="trail-desc flex">

                <p className='desc-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum soluta dolores voluptates esse numquam saepe cumque. Aperiam alias animi nesciunt molestias assumenda cumque laborum, explicabo ut iure maiores beatae, sequi officia ab enim iusto placeat nostrum! Ex, corrupti. Dolor magni suscipit veritatis sit dicta vel libero animi in, itaque repudiandae quos. Repelle</p>
                <video src={video} className="footer-vid" preload="auto" autoplay loop playsinline webkit-playsinline x5-playsinline></video>
            
         </div>

         <hr className="partners-underline" />
         <div className="footer-main-content flex">

        <div className="column flex">
            <h5>Trail</h5>
            <a href='..'>About us</a>
            <a href='..'>About us</a>
            <a href='..'>About us</a>
            <a href='..'>About us</a>
            <a href='..'>About us</a>
        </div>

        <div className="column flex">
            <h5>Talk to us</h5>
            <a href='..'><span><CiMail /></span>&nbsp;example@gmail.com</a>
            <a href='..'><span><MdOutlinePhone /></span>&nbsp;+91384XXXXX</a>
            <a href='..'><span><FaWhatsapp /></span>&nbsp;+91834XXXXXX</a>
        </div>

        <div className="column flex">
            <h5>Social</h5>
            <a href='..'><span><LuFacebook></LuFacebook></span>&nbsp;facebook</a>
            <a href='..'><span><FaInstagram></FaInstagram></span>&nbsp;Instagram</a>
            <a href='..'><span><CiLinkedin></CiLinkedin></span>&nbsp;Linkedin</a>
            <a href='..'><span><CiYoutube></CiYoutube></span>&nbsp;Youtube</a>
            <a href='..'><span><CiTwitter></CiTwitter></span>&nbsp;Twitter</a>
        </div>
         </div>

         <hr className="partners-underline" />
    </div>
  )
}

export default Footer