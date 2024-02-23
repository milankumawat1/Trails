import React from 'react'
import '../Forms/Forms_Css/form.css'

function Form() {
  return (
    <div className='form-main'>
      <h1 className="form-heading">Visa Form</h1>
        <form className='f'>
          <div className="name flex">
          <label className='lab'>Name</label>
          <input className='in' type='text' name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>Mobile no.</label>
          <input className='in' type='tel' name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>Email</label>
          <input className='in' type='email' name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>Destination</label>
          <input className='in' type="text" name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>No. of passenger</label>
          <input className='in' type='number' name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>Travel Dates</label>
          <input className='in' type="text" name='user_name'/>
          </div>

         <button className='sub-button' type='submit'>Submit</button>

         
        </form>
    </div>
  )
}

export default Form