import React from "react";
import { FaStar } from "react-icons/fa6";
import { SlSocialGoogle } from "react-icons/sl";
import { FaCheck } from "react-icons/fa6";
import "../Card/card.css";
import { useState } from "react";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import l from "../../Assets/form-logo.png";
import text from "../../Assets/form-holiday-text.png";
import map from "../../Assets/form-map.png";
import p from "../../Assets/form-plane.png";
import { FaTimes } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import hotel1 from '../../Assets/hotel1.webp';
import textG from '../../Assets/form-goa-text.png'
import emailjs from '@emailjs/browser';

function Card({ data }) {

  //------------------------- Villas-----------------------
  const [passenger, setPassenger] = useState(1);
  const incrementPassengers = () => {
    setPassenger((prevPassengers) => prevPassengers + 1);
  };

  const decrementPassengers = () => {
    if (passenger > 1) {
      setPassenger((prevPassengers) => prevPassengers - 1);
    }
  };
  const [blockH, setBlockH] = useState(false);
  const toggleBlockH = () => {
    setBlockH(!blockH);
  };

  const [blockV, setBlockV] = useState(false);
  const toggleBlockV = () => {
    setBlockV(!blockV);
  };

  const [nameG, setNameG]= useState('');
  const [emailG, setEmailG]= useState('');
  const [mobileG, setMobileG]= useState('');
  const [checkinG, setCheckinG]= useState('');
  const [checkoutG, setCheckoutG]= useState('');

  const handleSubmitG=(e)=>{

    e.preventDefault();

  // Your EmailJS service ID
  const serviceId= "service_moe4fcu";
  const templateId= "template_jua2d3s";
  const publicKey= "UldQk-J9B3sXHTGNY";

  // creating object containing dynamic template
  const templateParamsV={
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
   emailjs.send(serviceId, templateId, templateParamsV,  publicKey).then((response)=>{
    console.log("Email sent successfully !", response);
    setNameG('');
    setEmailG('');
    setMobileG('');
    setPassenger(1);
    setCheckinG('');
    setCheckoutG('');
    alert("Thank You For Submission.. We will get to you soon");
   })
   .catch((error)=>{
    alert("error submitting form please contact us.")
   })
   toggleBlockV();
  }


  // holidays--------------------------------------------

  const [pass, setPass]= useState(1);
  const incrementPass = () => {
    setPass(prevPass => prevPass+ 1);
  };

  const decrementPass = () => {
    if (pass > 1) {
      setPass(prevPassengersV => prevPassengersV - 1);
    }
  };


  const [name, setName]= useState('');
  const [email, setEmail]= useState('');
  const [mobile, setMobile]= useState('');
  const [checkin, setCheckin]= useState('');
  const [checkout, setCheckout]= useState('');
  const [triplocation, setTripLocation]= useState('');
  const handleSubmit=(e)=>{

    e.preventDefault();

  // Your EmailJS service ID
  const serviceId= "service_moe4fcu";
  const templateId= "template_jua2d3s";
  const publicKey= "UldQk-J9B3sXHTGNY";

  // creating object containing dynamic template
  const templateParamsV={
    from_name: name,
    from_email: email,
    from_mobile: mobile,
    checkin: checkin, 
    checkout: checkout,
    travellers: passenger, 
    triplocation: triplocation,
    from_category: "HOLIDAY DESTINATION INQUIRE"
  };

   // send mail
   emailjs.send(serviceId, templateId, templateParamsV,  publicKey).then((response)=>{
    console.log("Email sent successfully !", response);
    setName('');
    setEmail('');
    setMobile('');
    setPass(1);
    setCheckin('');
    setCheckout('');
    setTripLocation('');
    alert("Thank You For Submission.. We will get to you soon");
   })
   .catch((error)=>{
    alert("error submitting form please contact us.")
   })
   toggleBlockH();
  }



  const { category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const filteredData = data.filter((item) => item.category === category);
    if (!filteredData.length) {
      navigate("/");
    }
  }, [category, data, navigate]);

  return (
    <div className="card-outer">
      {data
        .filter((item) => item.category === category)
        .map((item, index) => (
          <div key={index} className="card flex">
            <div className="card-image-container">
              <img src={item.imgsrc} alt="card" className="card-image" />
            </div>
            <div className="card-desc">
              <h2 className="card-desc-heading">{item.title}</h2>
              <div className="card-desc-paras flex">
                <p className="card-para flex">
                  {item.hotelrating}{" "}
                  <span className="card-para-icon">
                    <FaStar />
                  </span>{" "}
                  {item.livingfacility}
                </p>

                <p className="card-para flex">
                  {" "}
                  <span className="card-para-icon">
                    <SlSocialGoogle />
                  </span>
                  {item.hotel}
                </p>
              </div>

              {/* Display facilities  */}
              {item.facilities?.length > 0 && (
                <div className="card-short-offers-container flex">
                  {item.facilities.map((facility, index) => (
                    <div key={index} className="card-short-offers">
                      {facility}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="card-price-desc-container flex">
              <h2 className="card-price-desc-heading">PACKAGE INCLUDES</h2>
              <p className="card-price-facilities">
                {" "}
                <span className="card-price-icon">
                  <FaCheck></FaCheck>
                </span>
                Transport Available
              </p>
              <p className="card-price-facilities">
                {" "}
                <span className="card-price-icon">
                  <FaCheck></FaCheck>
                </span>
                24x7 Online support
              </p>
              {console.log(item.category)}
              <div className="card-buttons-box flex">
                {item.document ? (
                  <button
                    className="view-deals-button"
                    onClick={() => window.open(item.document)}
                  >
                    Click here
                  </button>
                ) : item.link ? (
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <button className="view-deals-button pointer">Click here</button>
                  </a>
                ) : null}

                {item.category === "villas"? (
                  <button onClick={toggleBlockV} className="view-deals-button pointer">
                    Inquire now
                  </button>
                ) : (
                  <button onClick={toggleBlockH} className="view-deals-button pointer">
                    Inquire now
                  </button>
                )}
                {/* // <Link to='/contact'>
          // <button className="view-deals-button">
          // Inquire now</button>
          // </Link> */}
              </div>
            </div>

            {blockH && (
              <div className="modal">
                <div className="form">
                  <div className="form-left">
                    <div className="form-image-container">
                      <img src={text} alt="" className="text-form" />
                    </div>
                    <div className="form-image-container">
                      <img src={map} alt="" className="form-map" />
                    </div>
                    <div className="form-image-container">
                      <img src={p} alt="" className="form-plane" />
                    </div>
                    <div className="form-image-container logo-form-container">
                      <img src={l} alt="" className="form-logo" />
                    </div>
                  </div>

                  <div className="form-right">
                    <form onSubmit={handleSubmit} className="form-main-fields">
                      <input
                        className="in"
                        placeholder="Your name"
                        type="text"
                        name={name}
                        required
                        onChange={(e)=>setName(e.target.value)}
                      />
                      <input
                        className="in"
                        placeholder="Your email"
                        type="email"
                        name={email}
                        required
                         onChange={(e)=>setEmail(e.target.value)}
                      />
                      <input
                        className="in"
                        placeholder="Your moble no."
                        type="tel"
                        name={mobile}
                        required
                         onChange={(e)=>setMobile(e.target.value)}
                      />

                      <div className="passenger-input flex">
                        <label className="lab" htmlFor="passenger">
                          Number of Travellers:
                        </label>
                        <div className="input-group flex">
                          <div className="minus" onClick={decrementPass}>
                            -
                          </div>
                          <input
                            className="number-in"
                            type="text"
                            id="passenger"
                            value={pass}
                          />
                          <div className="plus" onClick={incrementPass}>
                            +
                          </div>
                        </div>
                      </div>

                      <div className="des passenger-input flex">
                        <label className="form-lab">Trip Location</label>
                        <div className="input-group flex">
                          <input className="in" type="text" id="passenger"  name={triplocation}
        onChange={(e)=>{setTripLocation(e.target.value)}} required />
                        </div>
                      </div>

                      <div className="passenger-input flex">
                        <label className="form-lab" htmlFor="passenger">
                          Check-In Date
                        </label>
                        <div className="input-group flex">
                          <input className="in" type="date" id="passenger"  name={checkin}
        onChange={(e)=>{setCheckin(e.target.value)}} required />
                        </div>
                      </div>

                      <div className="passenger-input flex">
                        <label className="form-lab" htmlFor="passenger">
                          Check-Out Date
                        </label>
                        <div className="input-group flex">
                          <input className="in" type="date" id="passenger" name={checkout}
        onChange={(e)=>{setCheckout(e.target.value)}} required/>
                        </div>
                      </div>

                      <button type="submit" className="submit-button flex pointer">
                        <BsSendFill className="send-icon"></BsSendFill>Submit
                      </button>
                    </form>
                  </div>
                  <FaTimes
                    onClick={toggleBlockH}
                    className="cross-btn"
                  ></FaTimes>
                </div>
              </div>
            )}

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
                   onChange={(e)=>setNameG(e.target.value)}
                />
                <input
                  className="in"
                  placeholder="Your email"
                  type="email"
                  name={emailG}
                   onChange={(e)=>setEmailG(e.target.value)}
                   required/>
                <input
                  className="in"
                  placeholder="Your moble no."
                  type="tel"
                  name={mobileG}
                   onChange={(e)=>setMobileG(e.target.value)}
                   required/>

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
                    <input className="in" type="date" id="passenger" name={checkinG} onChange={(e)=>setCheckinG(e.target.value)} required/>
                  </div>
                </div>

                <div className="passenger-input flex">
                  <label className="form-lab" htmlFor="passenger">
                    Check-Out Date
                  </label>
                  <div className="input-group flex">
                    <input className="in" type="date" id="passenger" name={checkoutG} onChange={(e)=>setCheckoutG(e.target.value)} required/>
                  </div>
                </div>

                <button type="submit" className="submit-button flex">
                  <BsSendFill className="send-icon"></BsSendFill>Submit
                </button>
              </form>
            </div>
            <FaTimes onClick={toggleBlockV} className="cross-btn"></FaTimes>
          </div>
        </div>
      )}
          </div>
        ))}
    </div>
  );
}

export default Card;
