import React from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "../Categories/Categories-css/category.css";
import { useState } from "react";
import singapore from "../../Assets/singapore.webp";
import { Link } from "react-router-dom";
import himachal from '../../Assets/himachal.webp'
import bali from '../../Assets/bali.webp'
import dubai from '../../Assets/dubai.webp'
import andaman from '../../Assets/Andaman.webp'
import vietnam from '../../Assets/vietnam.webp'
import srilanka from '../../Assets/Srilanka.webp'
import thailand from '../../Assets/thailand.webp'
import maldives from '../../Assets/Maldives.webp'

const Data = [
  {
    imgsrc: singapore,
    category: "/category/Singapore",
  },
  {
    imgsrc: himachal,
    category: "/category/Himachal",
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
            <FaArrowAltCircleLeft
              className={`arrow ${currentIndex === 0 ? "disable" : ""}`}
              onClick={prevSlide}
            ></FaArrowAltCircleLeft>
            <FaArrowAltCircleRight
              className={`arrow ${
                currentIndex === Data.length - 5||Data.length<5 ? "disable" : ""
              }`}
              onClick={nextSlide}
            ></FaArrowAltCircleRight>
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
  );
}

export default Popular;
