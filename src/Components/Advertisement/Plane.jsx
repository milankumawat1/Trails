import React from 'react'
import plane from '../../Assets/plane.svg'
import visa from '../../Assets/visa.svg'
import './advertisement.css'

function Plane() {
  return (
    <div className='categ-cont flex'>
      <img src={visa} alt="visa" className="visa-photo" />
      
        <img src={plane} alt="plane" className="plane-photo" />

        
    </div>
  )
}

export default Plane