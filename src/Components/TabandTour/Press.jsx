import React from 'react'
import '../TabandTour/press.css'
import { useState } from 'react';
import press from '../../Assets/press.avif'
import press2 from '../../Assets/hindustan.avif'
import press3 from '../../Assets/Toi.avif'
import press4 from '../../Assets/economics.avif'

function Press() {
const [activeHeading, setActiveHeading] = useState(null);

const handleHeadingHover = (index) => {
  setActiveHeading(index);
};

return (
  <div className='press'>
  <h1>What the press says</h1>
  <div className='press-main-container'>
    <div className="press-tabs flex">
    <img onMouseEnter={() => handleHeadingHover(1)} className={`tab-image ${activeHeading === 1 ? 'active' : ''}`} src={press} alt=""/>
    <img onMouseEnter={() => handleHeadingHover(2)} className={`tab-image2 ${activeHeading === 2 ? 'active' : ''}`} src={press2} alt=""/>
    <img onMouseEnter={() => handleHeadingHover(3)} className={`tab-image3 ${activeHeading === 3 ? 'active' : ''}`} src={press3} alt=""/>
    <img onMouseEnter={() => handleHeadingHover(4)} className={`tab-image4 ${activeHeading === 4 ? 'active' : ''}`} src={press4} alt=""/>
   
    </div>
    <div className="paragraph-container">
    <p className={activeHeading === 1 ? 'active tab-para' : ''}>"Adventure is Calling: Yolo Trips Unveils Unforgettable Solo Travel Experiences" (The Wanderlust Chronicle): Solo travelers seeking unique adventures. It emphasizes the agency's ability to cater to individual needs and create enriching solo experiences.</p>
    <p className={activeHeading === 2 ? 'active tab-para' : ''}>"Memories in the Making: Yolo Trips Crafts Multigenerational Vacations that Leave No One Behind" (Family Travel Times): Families looking for inclusive travel options. It highlights the agency's expertise in crafting age-appropriate itineraries and comfortable accommodations for all generations.</p>
    <p className={activeHeading === 3 ? 'active tab-para' : ''}>"Beyond the Tourist Trail: Yolo Trips Leads Travelers on Authentic, Off-the-Beaten-Path Journeys" (National Geographic Traveler): Attracts adventurous travelers seeking authentic cultural experiences. It positions Yolo Trips as a provider of unique itineraries that go beyond mainstream tourist destinations.</p>
    <p className={activeHeading === 4 ? 'active tab-para' : ''}>"Spontaneous Escape? Yolo Trips Delivers Last-Minute Deals for the Ultimate Getaway" (Travel + Leisure): Impulsive travelers who crave quick and exciting escapes. It showcases the agency's ability to find amazing deals on short notice, allowing users to seize travel opportunities.</p>
  
    </div>
  </div>
  </div>
);
}

export default Press