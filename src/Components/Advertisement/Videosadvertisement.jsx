import React from 'react'
import '../Advertisement/advertisement.css'
import video1 from '../../Assets/firstvideo.mp4'
import video2 from '../../Assets/secondvideo.mp4'
import { Link } from 'react-router-dom'
function Videosadvertisement() {
    return(
    <div className='pic-advertisement flex'>
    <a href='..'>
    <video src={video1} className="first-advertisement" preload="auto" autoplay loop playsinline webkit-playsinline x5-playsinline></video>
    </a>
    <Link to='/testimonial'>
    <video src={video2} className="second-advertisement" preload="auto" autoplay loop playsinline webkit-playsinline x5-playsinline></video>
    </Link>
</div>
    )
}

export default Videosadvertisement