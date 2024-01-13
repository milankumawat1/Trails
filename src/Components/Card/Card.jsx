import React from 'react'
import { FaStar } from "react-icons/fa6";
import { SlSocialGoogle } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import '../Card/card.css'
import { useParams, useNavigate } from 'react-router-dom';

function Card({data}) {
  const {category}= useParams();
  const navigate= useNavigate();

  const filteredData= data.filter(item=> item.category === category);

  if(!filteredData.length){
    navigate('/');
    return null;
  }
  return (
    <div className="card-outer">
    {
      filteredData.map(item=>(
        <div className='card flex'>
        <div className="card-image-container">
        <img src={item.imgsrc} alt="card" className="card-image" />
        </div>
        <div className="card-desc">
         <h2 className="card-desc-heading">{item.title}</h2>
         <div className="card-desc-paras flex">
          <p className="card-para">{item.hotelrating} <span className="card-para-icon"><FaStar /></span> {item.livingfacility}</p>
          
           <p className="card-para"> <span className="card-para-icon"><SlSocialGoogle /></span>{item.googlerating}</p>
          
         </div>
 
         {/* Display facilities  */}
         {item.facilities?.length>0 &&(
           <div>
         {item.facilities.map((facility, index)=>(
         <div key={index} className="card-short-offers">
           {facility}
         </div>
         ))}
          </div>
         )}
        
        </div>
 
        <div className="card-price-desc-container flex">
          <h2 className="card-price-desc-heading">PACAKAGE INCLUDES</h2>
          <p className="card-price-facilities"> <span className="card-price-icon"><FaCheck></FaCheck></span>Speed boat transfer</p>
          <p className="card-price-facilities"> <span className="card-price-icon"><FaCheck></FaCheck></span>24x7 Online support</p>
 
        <div className="card-price-details">
         <div className="old-price-detail flex">
             <p className="old-price">78,999</p>
             <div className="sale-percentage">45%</div>
         </div>
         <p className="new-price">12,432</p>
        </div>
 
        <div className="view-deals-button">View Deal</div>
        </div>
     </div>
      ))
    }
   
   </div>
  )
}

export default Card