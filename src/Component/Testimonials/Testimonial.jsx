import React from 'react'
import '../Testimonials/testimonial.css'
import person from '../../Assets/person.jpg'
import person1 from '../../Assets/person3.jpg'
import person2 from '../../Assets/person2.jpg'
import person3 from '../../Assets/person1.jpg'
import { FaStar } from 'react-icons/fa'

function Testimonial() {
    return (
        <div className='testimonial'>
            <h1 className="testimonial-heading">Testimonials</h1>

            <div className="testimonials-outer-container flex">

                <div className="testimonial-image-container flex">
                    <div className="square-div"></div>
                    <img src={person} alt="" className="testimonial-person-image" />
                    <div className="testimonial-rating-div flex">5<FaStar></FaStar></div>
                </div>

                <div className="testimonial-content">
                    <h2 className="testimonial-content-heading">Sarah M.</h2>
                    <p className="testimonial-para">
                        "Yolo Trips helped me conquer my fear of solo travel with their amazing Bali retreat. Everything was perfectly planned, from the comfortable homestay to the unique activities like cooking classes and temple visits. I met incredible people and had an unforgettable experience!"
                    </p>
                </div>
            </div>

            <div className="testimonials-outer-container flex">

                <div className="testimonial-image-container flex">
                    <div className="square-div"></div>
                    <img src={person1} alt="" className="testimonial-person-image" />
                    <div className="testimonial-rating-div flex">5<FaStar></FaStar></div>
                </div>

                <div className="testimonial-content">
                    <h2 className="testimonial-content-heading">Emily C.</h2>
                    {/* <h3 className="testimonial-content-sub">Detail......</h3> */}
                    <p className="testimonial-para">
                        Last-Minute Getaway Enthusiast: "Work was stressing me out, so I needed a quick escape. Yolo Trips saved the day! I found an amazing last-minute deal to the Greek Islands, complete with flights, hotel, and even a boat tour. It was the perfect recharge and came at a budget-friendly price. Sign me up for more spontaneous adventures!"
                    </p>
                </div>
            </div>

            <div className="testimonials-outer-container flex">

                <div className="testimonial-image-container flex">
                    <div className="square-div"></div>
                    <img src={person2} alt="" className="testimonial-person-image" />
                    <div className="testimonial-rating-div flex">5<FaStar></FaStar></div>
                </div>

                <div className="testimonial-content">
                    <h2 className="testimonial-content-heading">Mark L.</h2>
                    <p className="testimonial-para">
                        Adventure Seeker: "Ditch the tourist traps! Yolo Trips took me on an incredible off-the-beaten-path adventure in Morocco. We explored hidden desert villages, rode camels through sand dunes, and even stayed in a traditional Berber tent. It was an authentic and eye-opening experience I'll never forget."!"
                    </p>
                </div>
            </div>

            <div className="testimonials-outer-container flex">

                <div className="testimonial-image-container flex">
                    <div className="square-div"></div>
                    <img src={person3} alt="" className="testimonial-person-image" />
                    <div className="testimonial-rating-div flex">5<FaStar></FaStar></div>
                </div>

                <div className="testimonial-content">
                    <h2 className="testimonial-content-heading">The Kapoor's family</h2>
                    <p className="testimonial-para">
                        "Yolo Trips helped me conquer my fear of solo travel with their amazing Bali retreat. Everything was perfectly planned, from the comfortable homestay to the unique activities like cooking classes and temple visits. I met incredible people and had an unforgettable experience!"."!"
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Testimonial