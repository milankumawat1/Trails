import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import './popular.css'
import { useState } from 'react';
import destinationpic from '../../Assets/placevariable.avif'
import { Link } from 'react-router-dom';

const Data=[
    {
        imgsrc: destinationpic,
        category: '/category/Singapore'
    },
      {
        imgsrc: destinationpic
    },
      {
        imgsrc: destinationpic
    },
      {
        imgsrc: destinationpic
    },

     {
        imgsrc: destinationpic
    },

     {
        imgsrc: destinationpic
    },

     {
        imgsrc: destinationpic
    },

     {
        imgsrc: destinationpic
    },
]
function Popular() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
      };
      
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1) % Data.length);
      };
      
  return (
    <div className='categories-destinations'>

        <div className="categories-main-container">
            <div className="categories-upper flex">
                <h2>Most Popular Destinations</h2>
                <div className="categories-destination-upper-icons flex">
                    <FaArrowAltCircleLeft className={`arrow ${currentIndex===0?'disable':''}`} onClick={prevSlide}></FaArrowAltCircleLeft>
                    <FaArrowAltCircleRight className={`arrow ${currentIndex===Data.length-5?'disable':''}`} onClick={nextSlide}></FaArrowAltCircleRight>
                </div>
            </div>
           <div className='slider-main-wrap'>
            <div className="slider-wrapper flex" style={{ transform: `translateX(-${currentIndex * 260}px)` }}>
                {
                    Data.map(({imgsrc, category} ,index)=>{
                        return(
                            <Link to={category}>
                            <img key={index}
                            className={`slider-images ${index === currentIndex ? 'active' : ''}`}
                             src={imgsrc}
                             alt={`img-${index}`}></img>
                             </Link>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default Popular