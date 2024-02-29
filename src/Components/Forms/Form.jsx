import React, { useState } from 'react'
import '../Forms/Forms_Css/form.css'
import { BsSendFill } from "react-icons/bs";
import l from '../../Assets/form-logo.png'
import map from '../../Assets/form-map.png'
import p from '../../Assets/form-plane.png'
import text from '../../Assets/form-text.png'
function Form() {
  const [passenger, setPassenger]= useState(1);
  const incrementPassengers = () => {
    setPassenger(prevPassengers => prevPassengers + 1);
  };

  const decrementPassengers = () => {
    if (passenger > 1) {
      setPassenger(prevPassengers => prevPassengers - 1);
    }
  };
  return (
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

 </div>
  )
}

export default Form