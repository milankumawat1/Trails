import React from 'react'
import '../TabandTour/press.css'
import { useState } from 'react';
import press from '../../Assets/press.avif'

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
    <img onMouseEnter={() => handleHeadingHover(2)} className={`tab-image ${activeHeading === 2 ? 'active' : ''}`} src={press} alt=""/>
    <img onMouseEnter={() => handleHeadingHover(3)} className={`tab-image ${activeHeading === 3 ? 'active' : ''}`} src={press} alt=""/>
    <img onMouseEnter={() => handleHeadingHover(4)} className={`tab-image ${activeHeading === 4 ? 'active' : ''}`} src={press} alt=""/>
   
    </div>
    <div className="paragraph-container">
    <p className={activeHeading === 1 ? 'active' : ''}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis officiis explicabo itaque exercitationem minima, tempora quaerat dolor perspiciatis beatae consequatur, consequuntur unde officia laudantium voluptatem ab eligendi fugit omnis atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat reiciendis laborum, dicta sunt hic, ea dolores consectetur odit sit asperiores expedita placeat provident dolor corrupti modi ipsum cumque error rerum deserunt natus aliquam exercitationem! Officia iure a quibusdam inventore modi, deserunt magni harum dolor aut, neque incidunt fugiat quam esse.</p>
    <p className={activeHeading === 2 ? 'active' : ''}>Paragraph  Heading 2</p>
    <p className={activeHeading === 3 ? 'active' : ''}>Paragraph  Heading 3</p>
    <p className={activeHeading === 4 ? 'active' : ''}>Paragraph  Heading 4</p>
  
    </div>
  </div>
  </div>
);
}

export default Press