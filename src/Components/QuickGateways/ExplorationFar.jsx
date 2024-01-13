import React from 'react'
import '../QuickGateways/quick.css'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import travel from '../../Assets/destinationvariable.avif'
import square from '../../Assets/squareimage.avif'
import { useState } from 'react';
const images=[
  {
    img1: travel,
    placename1: 'Maldives',
    price1: 'from 80,000',
    img2: travel,
    placename2: 'Maldives',
    price2: 'from 80,000',
    img3: travel, 
    placename3: 'Maldives',
    price3: 'from 80,000',
    img4: square,
    placename4: 'Maldives',
    price4: 'from 80,000',
    img5: travel,
    placename5: 'Maldives',
    price5: 'from 80,000',
    img6: travel,
    placename6: 'Maldives',
    price6: 'from 80,000'
  },
  {
    img1: travel,
    placename1: 'Maldives',
    price1: 'from 80,000',
    img2: travel,
    placename2: 'Maldives',
    price2: 'from 80,000',
    img3: travel, 
    placename3: 'Maldives',
    price3: 'from 80,000',
    img4: square,
    placename4: 'Maldives',
    price4: 'from 80,000',
    img5: travel,
    placename5: 'Maldives',
    price5: 'from 80,000',
    img6: travel,
    placename6: 'Maldives',
    price6: 'from 80,000'
  },
  {
    img1: travel,
    placename1: 'Maldives',
    price1: 'from 80,000',
    img2: travel,
    placename2: 'Maldives',
    price2: 'from 80,000',
    img3: travel, 
    placename3: 'Maldives',
    price3: 'from 80,000',
    img4: square,
    placename4: 'Maldives',
    price4: 'from 80,000',
    img5: travel,
    placename5: 'Maldives',
    price5: 'from 80,000',
    img6: travel,
    placename6: 'Maldives',
    price6: 'from 80,000'
  }
  
]

function ExplorationFar() {
    const [currentIndex, setCurrentIndex]= useState(0);
  
    const nextSlide=()=>{
      setCurrentIndex((prevIndex)=>{
        if(images.length!==currentIndex){
         return  prevIndex+1;
        }
        else
        return;
      });
  
    }
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
    };
    
    return (
      <div className='quickgateways'>
         <div className="quick-upper flex">
                  <h2>EXPLORATIONS FAR AWAY<br></br><span>Ideal for 5-14 days trip</span></h2>
                  <div className="popular-destination-upper-icons flex">
                      <FaArrowAltCircleLeft className={`arrow ${currentIndex===0?'disable':''}`} onClick={prevSlide}></FaArrowAltCircleLeft>
                      <FaArrowAltCircleRight className={`arrow ${currentIndex===images.length?'disable':''}`} onClick={nextSlide}></FaArrowAltCircleRight>
                  </div>
              </div>
  
              <div className='quick-slider-main-wrap'>
              <div className="quick-slider-wrapper flex" style={{transform:`translateX(-${currentIndex*420}px)`}}>
  
                {
                  images.map((imagesObject, index)=>{
                    return(
                      <>                    <div className="first-card flex">
                      <a href='..'>
                      <div className="quick-card-image-container">
                       <img key={index} src={imagesObject.img1} alt="img" className="frstimage" />
                       <div className="quick-desc">
                        <h3>{imagesObject.placename1}</h3>
                        <p>{imagesObject.price1}</p>
                       </div>
                       </div>
                       </a>
      
                       <a href='..'>
                      <div className="quick-card-image-container">
                       <img key={index} src={imagesObject.img2} alt="img" className="secondimage" />
                       <div className="quick-desc">
                        <h3>{imagesObject.placename2}</h3>
                        <p>{imagesObject.price2}</p>
                       </div>
                       </div>
                       </a>
      
                       <a href='..'>
                      <div className="quick-card-image-container">
                       <img key={index} src={imagesObject.img3} alt="" className="thirdimage" />
                       <div className="quick-desc">
                        <h3>{imagesObject.placename3}</h3>
                        <p>{imagesObject.price3}</p>
                       </div>
                       </div>
                       </a>
                    </div>
      
                   
                    <div className="second-card">
                       <a href='..'>
                      <div className="quick-card-image-container">
                       <img key={index} src={imagesObject.img4} alt="" className="squareimage" />
                       <div className="quick-desc">
                        <h3>{imagesObject.placename4}</h3>
                        <p>{imagesObject.price4}</p>
                       </div>
                       </div>
                       </a>
                    </div>
                    
      
                    <div className="third-card flex">
                    <a href='..'>
                      <div className="quick-card-image-container">
                       <img key={index} src={imagesObject.img5} alt="" className="rectimage" />
                       <div className="quick-desc">
                        <h3>{imagesObject.placename5}</h3>
                        <p>{imagesObject.price5}</p>
                       </div>
                       </div>
                       </a>
      
                       <a href='..'>
                      <div className="quick-card-image-container">
                       <img key={index} src={imagesObject.img6} alt="" className="rectimage" />
                       <div className="quick-desc">
                        <h3>{imagesObject.placename6}</h3>
                        <p>{imagesObject.price6}</p>
                       </div>
                       </div>
                       </a>
                    </div>
                    </>
  
                    )
                  })
                }
  {/* 
                <div className="first-card flex">
                  <a href='..'>
                  <div className="quick-card-image-container">
                   <img src={travel} alt="img" className="frstimage" />
                   <div className="quick-desc">
                    <h3>Maldives</h3>
                    <p>from 89,853</p>
                   </div>
                   </div>
                   </a>
  
                   <a href='..'>
                  <div className="quick-card-image-container">
                   <img src={travel} alt="img" className="secondimage" />
                   <div className="quick-desc">
                    <h3>Maldives</h3>
                    <p>from 89,853</p>
                   </div>
                   </div>
                   </a>
  
                   <a href='..'>
                  <div className="quick-card-image-container">
                   <img src={travel} alt="" className="thirdimage" />
                   <div className="quick-desc">
                    <h3>Maldives</h3>
                    <p>from 89,853</p>
                   </div>
                   </div>
                   </a>
                </div>
  
               
                <div className="second-card">
                   <a href='..'>
                  <div className="quick-card-image-container">
                   <img src={square} alt="" className="squareimage" />
                   <div className="quick-desc">
                    <h3>Maldives</h3>
                    <p>from 89,853</p>
                   </div>
                   </div>
                   </a>
                </div>
                
  
                <div className="third-card flex">
                <a href='..'>
                  <div className="quick-card-image-container">
                   <img src={travel} alt="" className="rectimage" />
                   <div className="quick-desc">
                    <h3>Maldives</h3>
                    <p>from 89,853</p>
                   </div>
                   </div>
                   </a>
  
                   <a href='..'>
                  <div className="quick-card-image-container">
                   <img src={travel} alt="" className="rectimage" />
                   <div className="quick-desc">
                    <h3>Maldives</h3>
                    <p>from 89,853</p>
                   </div>
                   </div>
                   </a>
                </div>
                  */}
              </div>
          </div>
              
      </div>
    )
  }

export default ExplorationFar