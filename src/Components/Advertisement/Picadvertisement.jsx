import React from 'react'
import '../Advertisement/advertisement.css'
import best from '../../Assets/bestvalue.avif'
import flyer from '../../Assets/flyer.avif'

function Picadvertisement() {
  return (
    <div className='pic-advertisement flex'>
        <a href='..'>
        <img src={best} alt="" className="first-advertisement" />
        </a>
        <a href='..'>
        <img src={flyer} alt="" className="second-advertisement" />
        </a>
    </div>
  )
}

export default Picadvertisement