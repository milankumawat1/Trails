import React from 'react'
import '../Forms/Forms_Css/form.css'

import l from '../../Assets/form-logo.webp'
import map from '../../Assets/map-form.webp'
import p from '../../Assets/plane-form.webp'
import text from '../../Assets/holidaytext.webp'
function Form() {
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
    <div className="form-image-container">
    <img src={l} alt="" className="form-logo" />
    </div>
  </div>

  <div className="form-right">
    <from className="form-main-fields">

    <input className='in' placeholder='Your name' type='text' name='user_name'/>
    <input className='in' placeholder='Your email' type='email' name='user_name'/>
    <input className='in' placeholder='Your moble no.' type='tel' name='user_name'/>

    </from>
  </div>

 </div>
  )
}

export default Form