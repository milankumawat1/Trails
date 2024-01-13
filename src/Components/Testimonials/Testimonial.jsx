import React from 'react'
import '../Testimonials/testimonial.css'
import person from '../../Assets/testimony.avif'
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
                <h2 className="testimonial-content-heading">Name</h2>
                <h3 className="testimonial-content-sub">Detail......</h3>
                <p className="testimonial-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis minima voluptas id neque, non atque dolore dolores possimus suscipit pariatur sint, enim ducimus numquam omnis dolorem, error sunt dignissimos consequatur. Voluptate possimus necessitatibus mollitia deserunt.
                </p>
             </div>
       </div>

       <div className="testimonials-outer-container flex">

            <div className="testimonial-image-container flex">
                <div className="square-div"></div>
                <img src={person} alt="" className="testimonial-person-image" />
                <div className="testimonial-rating-div flex">5<FaStar></FaStar></div>
            </div>

            <div className="testimonial-content">
                <h2 className="testimonial-content-heading">Name</h2>
                <h3 className="testimonial-content-sub">Detail......</h3>
                <p className="testimonial-para">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis minima voluptas id neque, non atque dolore dolores possimus suscipit pariatur sint, enim ducimus numquam omnis dolorem, error sunt dignissimos consequatur. Voluptate possimus necessitatibus mollitia deserunt.
                </p>
             </div>
       </div>
    </div>
  )
}

export default Testimonial