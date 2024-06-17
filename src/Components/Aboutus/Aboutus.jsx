import React from 'react'
import logo from '../../Assets/logo.svg'
import travel from '../../Assets/travelmanagement.png'
import about from '../../Assets/background.svg'
import LazyLoading from 'react-lazyload'
import './about.css'

function Aboutus() {
  return (
    <div className='about-us'>
        <img src={about} alt="" className="community-image" />

        <div className="about-outer-container">
            <h1 className="about-main-heading">
              OUR COMPANY  
            </h1>
           
           <div className="about-inner-containers flex">
            <img src={logo} alt="" className="about-column reflect-photo" />
            <p className="column-para">“YOLO TRIPS” is a professionally managed travel company and offers a broad spectrum of travel and tourism services that includes Corporate Travel (International & Domestic),  Leisure Travel, MICE, Foreign Exchange, Car Rentals, Visa & Passport Assistance, Travel Insurance. has its office located in Vaishali Ghaziabad. Our team of professionally qualified travel experts provides unmatched quality of service to its customers and their negotiating power in the industry ensures that you get the most competitive prices without any compromises on the quality and thus obtain optimum value for your travel investments.
            </p>
           </div>

           <h1 className="about-main-heading">
             TRAVEL MANAGEMENT 
            </h1>
            <div className="about-inner-containers flex">
              <img src={travel} alt="" className="about-column" />
           <p className="column-para">We are a full service travel management company providing quality services to our customers delivered with the financial strength, experienced teammates, advanced systems and innovations that you would expect from a leader.
"YOLO TRIPS” focuses on your requirements and offer you every service from consolidated travel purchases to regional, national or global support in order to provide you total satisfaction. We understand the business from the ground up and that enables us to serve you better
</p>
</div>
        </div>
    </div>
  )
}

export default Aboutus