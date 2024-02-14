import React from 'react'
import '../Advertisement/advertisement.css'
import video1 from '../../Assets/firstvideo.mp4'
import video2 from '../../Assets/secondvideo.mp4'
import { Link } from 'react-router-dom'
function Videosadvertisement() {
    return(
    <div className='pic-advertisement flex'>
    
    <video src={video1} className="first-advertisement-video" preload="auto" autoPlay loop playsInline webkit-playsinline={true} x5-playsInline={true}></video>
  
    <Link to='/testimonial'>
    <video src={video2} className="second-advertisement-video" preload="auto" autoplay loop playsInline webkit-playsinline={true} x5-playsInline={true}></video>
    </Link>
</div>
    )
}

export default Videosadvertisement