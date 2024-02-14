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
import { Link } from 'react-router-dom';

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

                <p className='desc-para'>“YOLO TRIPS Pvt. Ltd.” is a professionally managed travel company and offers a broad spectrum of travel and tourism services that includes Corporate Travel (International & Domestic), Leisure Travel, MICE, Foreign Exchange, Car Rentals, Visa & Passport Assistance, Travel Insurance. has its office located at UG-SR 01A Ansal Plaza , Vaishali Sector-1 Ghaziabad. Our team of professionally qualified travel experts provides unmatched quality of service to its customers and their negotiating power in the industry ensures that you get the most competitive prices without any compromises on the quality and thus obtain optimum value for your travel investments.</p>
                <video src={video} className="footer-vid" preload="auto" autoplay loop playsinline webkit-playsinline x5-playsinline></video>
            
         </div>

         <hr className="partners-underline" />
         <div className="footer-main-content flex">

        <div className="column flex">
            <h5>Trail</h5>
            <Link to={'/'}>Home</Link>
            <Link to={'/contact'}>Contact us</Link>
            <Link to={'/testimonial'}>Testimonial</Link>
           
        </div>

        <div className="column flex">
            <h5>Talk to us</h5>
            <a href="mailto:sales@yolotrips.co.in"><span><CiMail /></span>&nbsp;sales@yolotrips.co.in</a>
            <a href='tel:+919599006862'><span><MdOutlinePhone /></span>&nbsp;+919599006862</a>
            <a href='tel:+919910888997'><span><FaWhatsapp /></span>&nbsp;+919910888997</a>
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