import React from 'react'
import plane from '../../Assets/plane.svg'
import visa from '../../Assets/visa.svg'
import { Link } from 'react-router-dom'
import './advertisement.css'

function Plane() {
  return (
    <div className='categ-cont flex'>
           <Link to='/contact'>
      <img src={visa} alt="visa" className="visa-photo" />
      </Link>
      <Link to='/contact'>
        <img src={plane} alt="plane" className="plane-photo" />
        </Link>

        
    </div>
  )
}

export default Plane