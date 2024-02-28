import React, { useState } from 'react'
import plane from '../../Assets/plane.svg'
import visa from '../../Assets/visa.svg'
import {Link } from 'react-router-dom'
import './advertisement.css'
import { FaTimes } from "react-icons/fa";

function Plane() {
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
          <div className='form-main'>
          <h1 className="form-heading">Flight</h1>
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
          <label className='lab'>No. of passenger:</label>
          <input className='in' type='number' name='user_name'/>
          </div>
{/* 
          <div className="name flex">
          <label className='lab'>Travel Date :</label>
          </div> */}

          <div className="name flex">
          <label className='lab'>From :</label><input className='in' type="text" name='user_name'/>
          </div>
          <div className="name flex">
          <label className='lab'>To :</label><input className='in' type="text" name='user_name'/>
          </div>

          <div className="name flex">
          <label className='lab'>Category</label>
         <select className='in'>
          <option value='one-way'>One way</option>
          <option value='one-way'>Round Trip</option>
         </select>
          </div>

          <div className="name flex">
          <label className='lab'>Departure Date :</label><input className='in' type="date" name='user_name'/>
          <label className='lab'>Arrival Date :</label><input className='in' type="date" name='user_name'/>
          </div>

        

         <button className='sub-button' type='submit'>Submit</button>
         <FaTimes onClick={toggleBlock2} className='cross-btn'></FaTimes>
         
        </form>
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