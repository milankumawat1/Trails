import React from 'react'
import './vacation.css'
import andaman from '../../Assets/Andaman.jpg'
import vietnam from '../../Assets/vietnam.jpg'
import srilanka from '../../Assets/Srilanka.jpg'
import thailand from '../../Assets/thailand.jpg'
import { Link } from 'react-router-dom'

const Data = [
    {
      imgsrc: andaman,
      category: "/category/Andaman",
      name: "Andaman"
    }, 
    {
      imgsrc: vietnam,
      category: "/category/Vietnam",
      name: "Vietnam"
    }, 
    {
      imgsrc: srilanka,
      category: "/category/Srilanka",
      name: "Srilanka"
    }, 
    {
      imgsrc: thailand,
      category: "/category/Thailand",
      name: "Thailand"
    }
  ];


function Vacation() {
  return (
    <div className='vacation'>
    <div className="vacation-inner-container flex">
        <h2>VACATION FOR ALL</h2>
        <h3 className='trav'>Travellers</h3>

        <div className="vacation-images flex">

            <div className="vacation-image-cards flex">

            {Data.map(({ imgsrc, category, name }, index) => (
                 <Link to={category} key={index}>
                <div className="vacation-card flex">
                <img src={imgsrc} alt="" className="vacation-image" />
                <div className="vacation-desc-container">
                    <p className='white-text'>{name}</p>
                </div>
                </div>
                </Link>
                ))}

            </div>
        </div>
    </div>
</div>
  )
}

export default Vacation