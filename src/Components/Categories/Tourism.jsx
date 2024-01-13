import React from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import './popular.css'
import { useState } from 'react';
import tourism from '../../Assets/Tourism.avif'


const Data=[
    {
        imgsrc: tourism
    },
      {
        imgsrc: tourism
    },
      {
        imgsrc: tourism
    },
      {
        imgsrc: tourism
    },

     {
        imgsrc: tourism
    },

     {
        imgsrc: tourism
    },

     {
        imgsrc: tourism
    },

     {
        imgsrc: tourism
    },
]

function Tourism() {
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
                <h2>TOURISM BOARD PARTNERS</h2>
                <div className="categories-destination-upper-icons flex">
                    <FaArrowAltCircleLeft className={`arrow ${currentIndex===0?'disable':''}`} onClick={prevSlide}></FaArrowAltCircleLeft>
                    <FaArrowAltCircleRight className={`arrow ${currentIndex===Data.length-5?'disable':''}`} onClick={nextSlide}></FaArrowAltCircleRight>
                </div>
            </div>
           <div className='slider-main-wrap'>
            <div className="slider-wrapper flex" style={{ transform: `translateX(-${currentIndex * 235}px)` }}>
                {
                    Data.map(({imgsrc}, index)=>{
                        return(
                            <img key={index}
                            className={`slider-images ${index === currentIndex ? 'active' : ''}`}
                             src={imgsrc}
                             alt={`img-${index}`}></img>
                        )
                    })
                }
            </div>
        </div>
    </div>
    </div>
  )
}

export default Tourism