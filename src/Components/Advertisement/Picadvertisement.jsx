import React from 'react'
import '../Advertisement/advertisement.css'
import best from '../../Assets/bestvalue.avif'
import flyer from '../../Assets/flyer.avif'
import { Link } from 'react-router-dom'

function Picadvertisement() {
  return (
    <div className='pic-advertisement flex'>
        <Link to='/contact'>
        <img src={best} alt="" className="first-advertisement" />
        </Link>
        <Link to='/contact'>
        <img src={flyer} alt="" className="second-advertisement" />
        </Link>
    </div>
  )
}

export default Picadvertisement