import React from "react";
import { useState } from "react";
import "../QuickGateways/quick.css";
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import hotel1 from "../../Assets/hotel1.webp";
import hotel2 from "../../Assets/hotel2.webp";
import hotel3 from "../../Assets/hotel3.webp";
import hotel4 from "../../Assets/hotel4.webp";
import hotel5 from "../../Assets/hotel5.webp";
import hotel6 from "../../Assets/hotel6.webp";
import l from "../../Assets/form-logo.png";
import text from "../../Assets/form-goa-text.png";
import { Link } from "react-router-dom";
import { BsSendFill } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import { FaTimes } from "react-icons/fa";
const images = [
  {
    img1: hotel4,
    placename1: "",
    price1: "",
    img2: hotel2,
    placename2: "",
    price2: "",
    img3: hotel3,
    placename3: "",
    price3: "",
    img4: hotel1,
    placename4: "",
    price4: "",
    img5: hotel5,
    placename5: "",
    price5: "",
    img6: hotel6,
    placename6: "",
    price6: "",
    category: "/category/villas",
  },
];

function Quick() {
  const [passenger, setPassenger] = useState(1);
  const incrementPassengers = () => {
    setPassenger((prevPassengers) => prevPassengers + 1);
  };

  const decrementPassengers = () => {
    if (passenger > 1) {
      setPassenger((prevPassengers) => prevPassengers - 1);
    }
  };
  const [blockV, setBlockV] = useState(false);
  const toggleBlockV = () => {
    setBlockV(!blockV);
  };

  const [nameG, setNameG] = useState('');
  const [emailG, setEmailG] = useState('');
  const [mobileG, setMobileG] = useState('');
  const [checkinG, setCheckinG] = useState('');
  const [checkoutG, setCheckoutG] = useState('');

  const handleSubmitG = (e) => {

    e.preventDefault();

    // Your EmailJS service ID
    const serviceId = "service_moe4fcu";
    const templateId = "template_jua2d3s";
    const publicKey = "UldQk-J9B3sXHTGNY";

    // creating object containing dynamic template
    const templateParamsV = {
      from_name: nameG,
      from_email: emailG,
      from_mobile: mobileG,
      checkin: checkinG,
      checkout: checkoutG,
      travellers: passenger,
      triplocation: "",
      from_category: "VILLAS INQUIRE"
    };

    // send mail
    emailjs.send(serviceId, templateId, templateParamsV, publicKey).then((response) => {
      console.log("Email sent successfully !", response);
      setNameG('');
      setEmailG('');
      setMobileG('');
      setPassenger(1);
      setCheckinG('');
      setCheckoutG('');
      alert("Thank You For Submission.. We will get to you soon");
    })
      .catch((error) => {
        alert("error submitting form please contact us.")
      })
    toggleBlockV();
  }

  // const [currentIndex, setCurrentIndex]= useState(0);

  // const nextSlide=()=>{
  //   setCurrentIndex((prevIndex)=>{
  //     if(images.length!==currentIndex){
  //      return  prevIndex+1;
  //     }
  //     else
  //     return;
  //   });

  // }

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1) % images.length);
  // };

  return (
    <div className="quickgateways">
      <div className="quick-upper flex">
        <h2>
          Luxury Villas<br></br>
        </h2>
        {/* <div className="popular-destination-upper-icons flex"> */}
        {/* <FaArrowAltCircleLeft className={`arrow ${currentIndex===0?'disable':''}`} onClick={prevSlide}></FaArrowAltCircleLeft>
                    <FaArrowAltCircleRight className={`arrow ${currentIndex===images.length?'disable':''}`} onClick={nextSlide}></FaArrowAltCircleRight> */}

        {/* <FaArrowAltCircleLeft className='disable' onClick={prevSlide}></FaArrowAltCircleLeft>
                    <FaArrowAltCircleRight className='disable' onClick={nextSlide}></FaArrowAltCircleRight> */}
        {/* </div> */}
      </div>

      <div className="quick-slider-main-wrap">
        {/* <div className="quick-slider-wrapper flex" style={{transform:`translateX(-${currentIndex*420}px)`}}> */}
        <div className="quick-slider-wrapper flex">
          {images.map((imagesObject, index) => (
            <div key={index} className="quick-card-outer flex">
              <div className="first-card flex">
                <Link to={imagesObject.category} key={index}>
                  <div className="quick-card-image-container">
                    <img
                      src={imagesObject.img1}
                      alt="img"
                      className="firstimage"
                    />
                  </div>
                </Link>

                <Link to={imagesObject.category} key={index}>
                  <div className="quick-card-image-container">
                    <img
                      src={imagesObject.img2}
                      alt="img"
                      className="secondimage"
                    />
                    <div className="quick-desc">
                      <h3>{imagesObject.placename2}</h3>
                      <p>{imagesObject.price2}</p>
                    </div>
                  </div>
                </Link>

                <Link to={imagesObject.category} key={index}>
                  <div className="quick-card-image-container">
                    <img
                      src={imagesObject.img3}
                      alt=""
                      className="thirdimage"
                    />
                    <div className="quick-desc">
                      <h3>{imagesObject.placename3}</h3>
                      <p>{imagesObject.price3}</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="second-card">
                <Link to={imagesObject.category} key={index}>
                  <div className="quick-card-image-container">
                    <img
                      key={index}
                      src={imagesObject.img4}
                      alt=""
                      className="squareimage"
                    />
                    <div className="quick-desc">
                      <h3>{imagesObject.placename4}</h3>
                      <p>{imagesObject.price4}</p>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="third-card flex">
                <Link to={imagesObject.category} key={index}>
                  <div className="quick-card-image-container">
                    <img
                      key={index}
                      src={imagesObject.img5}
                      alt=""
                      className="rectimage"
                    />
                    <div className="quick-desc">
                      <h3>{imagesObject.placename5}</h3>
                      <p>{imagesObject.price5}</p>
                    </div>
                  </div>
                </Link>

                <Link to={imagesObject.category} key={index}>
                  <div className="quick-card-image-container">
                    <img
                      key={index}
                      src={imagesObject.img6}
                      alt=""
                      className="rectimage"
                    />
                    <div className="quick-desc">
                      <h3>{imagesObject.placename6}</h3>
                      <p>{imagesObject.price6}</p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
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
      <div className="villa-buttons flex">
        <Link className="view-deals-button villas-button" to="/category/villas">
          Show more
        </Link>
        <div
          className="view-deals-button villas-button pointer"
          onClick={toggleBlockV}
        >
          Inquire Now
        </div>
      </div>
      {blockV && (
        <div className="modal">
          <div className="form">
            <div className="form-left">
              <div className="form-image-container">
                <img src={text} alt="" className="text-form" />
              </div>
              <div className="form-image-container">
                <img src={hotel1} alt="" className="form-map" />
              </div>
              {/* <div className="form-image-container">
    <img src={p} alt="" className="form-plane" />
    </div> */}
              <div className="form-image-container">
                <img src={l} alt="" />
              </div>
            </div>

            <div className="form-right">
              <form onSubmit={handleSubmitG} className="form-main-fields">
                <input
                  required
                  className="in"
                  placeholder="Your name"
                  type="text"
                  name={nameG}
                  onChange={(e) => setNameG(e.target.value)}
                />
                <input
                  className="in"
                  placeholder="Your email"
                  type="email"
                  name={emailG}
                  onChange={(e) => setEmailG(e.target.value)}
                  required />
                <input
                  className="in"
                  placeholder="Your moble no."
                  type="tel"
                  name={mobileG}
                  onChange={(e) => setMobileG(e.target.value)}
                  required />

                <div className="passenger-input flex">
                  <label className="lab" htmlFor="passenger">
                    Number of Travellers:
                  </label>
                  <div className="input-group flex">
                    <div className="minus" onClick={decrementPassengers}>
                      -
                    </div>
                    <input
                      className="number-in"
                      type="text"
                      id="passenger"
                      value={passenger}
                    />
                    <div className="plus" onClick={incrementPassengers}>
                      +
                    </div>
                  </div>
                </div>

                <div className="passenger-input flex">
                  <label className="form-lab" htmlFor="passenger">
                    Check-In Date
                  </label>
                  <div className="input-group flex">
                    <input className="in" type="date" id="passenger" name={checkinG} onChange={(e) => setCheckinG(e.target.value)} required />
                  </div>
                </div>

                <div className="passenger-input flex">
                  <label className="form-lab" htmlFor="passenger">
                    Check-Out Date
                  </label>
                  <div className="input-group flex">
                    <input className="in" type="date" id="passenger" name={checkoutG} onChange={(e) => setCheckoutG(e.target.value)} required />
                  </div>
                </div>

                <button type="submit" className="submit-button flex">
                  <BsSendFill className="send-icon pointer"></BsSendFill>Submit
                </button>
              </form>
            </div>
            <FaTimes onClick={toggleBlockV} className="cross-btn"></FaTimes>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quick;
