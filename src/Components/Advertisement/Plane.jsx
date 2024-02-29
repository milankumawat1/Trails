import React, { useState } from 'react'
import plane from '../../Assets/plane.svg'
import visa from '../../Assets/visa.svg'
import {Link } from 'react-router-dom'
import { BsSendFill } from "react-icons/bs";
import './advertisement.css'
import { FaTimes } from "react-icons/fa";
import l from '../../Assets/form-logo.png'
import map from '../../Assets/form-map.png'
import p from '../../Assets/form-plane.png'
import text from '../../Assets/form-text.png'

function Plane() {
  const [passenger, setPassenger]= useState(1);
  const incrementPassengers = () => {
    setPassenger(prevPassengers => prevPassengers + 1);
  };

  const decrementPassengers = () => {
    if (passenger > 1) {
      setPassenger(prevPassengers => prevPassengers - 1);
    }
  };
  const[block, setBlock]= useState(false);
  const toggleBlock= ()=>{
    setBlock(!block)
  }

  const[block2, setBlock2]= useState(false);
  const toggleBlock2= ()=>{
    setBlock2(!block2)
  }
  return (
    <div className='categ-cont flex'>
      <div onClick={toggleBlock}>
      <img src={visa} alt="visa" className="visa-photo" />
      </div>
      <div onClick={toggleBlock2}>
        <img src={plane} alt="plane" className="plane-photo" />
        </div>
        {
          block2&&(
            <div className="modal"> 
            <div className="form">

<div className="form-left">
  <div className="form-image-container">
  <img src={text} alt="" className="text-form" />
  </div>
  <div className="form-image-container">
  <img src={map} alt="" className="form-map" />
 </div>
  <div className="form-image-container">
  <img src={p} alt="" className="form-plane" />
  </div>
  <div className="form-image-container logo-form-container">
  <img src={l} alt="" className="form-logo" />
  </div>
</div>

<div className="form-right">
  <from className="form-main-fields">

  <input className='in' placeholder='Your name' type='text' name='user_name'/>
  <input className='in' placeholder='Your email' type='email' name='user_name'/>
  <input className='in' placeholder='Your moble no.' type='tel' name='user_name'/>

  <div className="passenger-input flex">
    <label className='lab' htmlFor="passenger">Number of Passengers:</label>
    <div className="input-group flex">
      <div className="minus" onClick={decrementPassengers}>-</div>
      <input
      className='number-in'
        type="text"
        id="passenger"
        value={passenger}
        
      />
      <div className="plus" onClick={incrementPassengers}>+</div>
    </div>
  </div>

  <div className="des passenger-input flex">
    <label className='form-lab'>To</label>
    <div className="input-group flex">
      <input
      className='in'
        type="text"
        id="passenger"
      />
     
    </div>

    <label className='form-lab' htmlFor="passenger">From</label>
    <div className="input-group flex">
      <input
      className='in'
        type="text"
        id="passenger"
      />
    </div>
  </div>

  <div className="passenger-input flex">
    <label className='form-lab' htmlFor="passenger">Check-In Date</label>
    <div className="input-group flex">
      <input
      className='in'
        type='date'
        id="passenger"
      />
    </div>
  </div>

  <div className="passenger-input flex">
    <label className='form-lab' htmlFor="passenger">Check-Out Date</label>
    <div className="input-group flex">
      <input
      className='in'
        type='date'
        id="passenger"
      />
    </div>
  </div>

<div className="submit-button flex"><BsSendFill className='send-icon'></BsSendFill>Submit</div>



  </from>
 
</div>
<FaTimes onClick={toggleBlock2} className='cross-btn'></FaTimes>
</div>           
            </div>
          )
        }


        {
          block&&(
            <div className="modal">
          <div className='form-main'>
          <h1 className="form-heading">Visa</h1>
        <form className='f'>
          <div className="name flex">
          <label className='lab'>Name :</label>
          <input className='in' type='text' name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>Mobile no. :</label>
          <input className='in' type='tel' name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>Email :</label>
          <input className='in' type='email' name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>No. of passenger</label>
          <input className='in' type='number' name='user_name'/>
          </div>
{/* 
          <div className="name flex">
          <label className='lab'>Travel Date :</label>
          </div> */}


          <div className="name flex">
          <label className='lab'>Destination :</label><input className='in' type="text" name='user_name'/>
          </div>
          

          <div className="name flex">
          <label className='lab'>Departure Date :</label><input className='in' type="date" name='user_name'/>
          <label className='lab'>Arrival Date :</label><input className='in' type="date" name='user_name'/>
          </div>

        

         <button className='sub-button' type='submit'>Submit</button>
         <FaTimes onClick={toggleBlock} className='cross-btn'></FaTimes>
         
        </form>
    </div>
            
            </div>
          )
        }
        
    </div>
  )
}

export default Plane