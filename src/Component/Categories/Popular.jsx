import React from 'react'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import './category.css'
import { useState } from "react";
import singapore from "../../Assets/singapore.jpg";
import { Link } from "react-router-dom";
import bali from '../../Assets/bali.jpg'
import dubai from '../../Assets/dubai.jpg'
import andaman from '../../Assets/Andaman.jpg'
import vietnam from '../../Assets/vietnam.jpg'
import srilanka from '../../Assets/Srilanka.jpg'
import thailand from '../../Assets/thailand.jpg'
import maldives from '../../Assets/Maldives.jpg'


const Data = [
    {
      imgsrc: singapore,
      category: "/category/Singapore",
    },
    {
      imgsrc: bali,
      category: "/category/Bali",
    },
    {
      imgsrc: dubai,
      category: "/category/Dubai",
    },
    {
      imgsrc: andaman,
      category: "/category/Andaman",
    }, 
    {
      imgsrc: vietnam,
      category: "/category/Vietnam",
    }, 
    {
      imgsrc: srilanka,
      category: "/category/Srilanka",
    }, 
    {
      imgsrc: thailand,
      category: "/category/Thailand",
    }, 
    {
      imgsrc: maldives,
      category: "/category/Maldives",
    }
  ];
function Popular() {

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Data.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % Data.length);
    };
  

  return (
    <div className="categories-destinations">
      <div className="categories-main-container">
        <div className="categories-upper flex">
          <h2>Most Popular Destinations</h2>
          <div className="categories-destination-upper-icons flex">
            <IoIosArrowBack
              className={`arrow ${currentIndex === 0 ? "disable" : ""}`}
              onClick={prevSlide}
            ></IoIosArrowBack>
            <IoIosArrowForward
              className={`arrow ${
                currentIndex === Data.length - 5||Data.length<5 ? "disable" : ""
              }`}
              onClick={nextSlide}
            ></IoIosArrowForward>
          </div>
        </div>
        <div className="slider-main-wrap">
          <div
            className="slider-wrapper flex"
            style={{ transform: `translateX(-${currentIndex * 240}px)` }}
          >
            {Data.map(({ imgsrc, category }, index) => (
              <Link to={category} key={index}>
                <img
                  className={`slider-images ${
                    index === currentIndex ? "active" : ""
                  }`}
                  src={imgsrc}
                  alt={`img-${index}`}
                ></img>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Popular