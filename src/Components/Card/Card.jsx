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
function Card({ data }) {
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
                    <button className="view-deals-button">Click here</button>
                  </a>
                ) : null}

                {item.category === "villas"? (
                  <button onClick={toggleBlockV} className="view-deals-button">
                    Inquire now
                  </button>
                ) : (
                  <button onClick={toggleBlockH} className="view-deals-button">
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
                    <from className="form-main-fields">
                      <input
                        className="in"
                        placeholder="Your name"
                        type="text"
                        name="user_name"
                      />
                      <input
                        className="in"
                        placeholder="Your email"
                        type="email"
                        name="user_name"
                      />
                      <input
                        className="in"
                        placeholder="Your moble no."
                        type="tel"
                        name="user_name"
                      />

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

                      <div className="des passenger-input flex">
                        <label className="form-lab">Trip Location</label>
                        <div className="input-group flex">
                          <input className="in" type="text" id="passenger" />
                        </div>
                      </div>

                      <div className="passenger-input flex">
                        <label className="form-lab" htmlFor="passenger">
                          Check-In Date
                        </label>
                        <div className="input-group flex">
                          <input className="in" type="date" id="passenger" />
                        </div>
                      </div>

                      <div className="passenger-input flex">
                        <label className="form-lab" htmlFor="passenger">
                          Check-Out Date
                        </label>
                        <div className="input-group flex">
                          <input className="in" type="date" id="passenger" />
                        </div>
                      </div>

                      <div className="submit-button flex">
                        <BsSendFill className="send-icon"></BsSendFill>Submit
                      </div>
                    </from>
                  </div>
                  <FaTimes
                    onClick={toggleBlockH}
                    className="cross-btn"
                  ></FaTimes>
                </div>
              </div>
            )}

            {
              blockV&&(
                
            
              <div className="modal"> 
              <div className="form">
  
  <div className="form-left">
    <div className="form-image-container">
    <img src={textG} alt="" className="text-form" />
    </div>
    <div className="form-image-container">
    <img src={hotel1} alt="" className="form-map curve" />
   </div>
    {/* <div className="form-image-container">
    <img src={p} alt="" className="form-plane" />
    </div> */}
    <div className="form-image-container">
    <img src={l} alt="" />
    </div>
  </div>
  
  <div className="form-right">
    <from className="form-main-fields">
  
    <input className='in' placeholder='Your name' type='text' name='user_name'/>
    <input className='in' placeholder='Your email' type='email' name='user_name'/>
    <input className='in' placeholder='Your moble no.' type='tel' name='user_name'/>
  
    <div className="passenger-input flex">
      <label className='lab' htmlFor="passenger">Number of Travellers:</label>
      <div className="input-group flex">
        <div className="minus" onClick={decrementPassengers}>-</div>
        <input
        className='number-in'
          type="text"
          id="passenger"
          value={passenger}
          
        />
        <div className="plus" onClick={incrementPassengers}>+</div>
      </div>
    </div>
  
    <div className="des passenger-input flex">
      <label className='form-lab'>To</label>
      <div className="input-group flex">
        <input
        className='in'
          type="text"
          id="passenger"
        />
       
      </div>
  
      <label className='form-lab' htmlFor="passenger">From</label>
      <div className="input-group flex">
        <input
        className='in'
          type="text"
          id="passenger"
        />
      </div>
    </div>
  
    <div className="passenger-input flex">
      <label className='form-lab' htmlFor="passenger">Check-In Date</label>
      <div className="input-group flex">
        <input
        className='in'
          type='date'
          id="passenger"
        />
      </div>
    </div>
  
    <div className="passenger-input flex">
      <label className='form-lab' htmlFor="passenger">Check-Out Date</label>
      <div className="input-group flex">
        <input
        className='in'
          type='date'
          id="passenger"
        />
      </div>
    </div>
  
  <div className="submit-button flex"><BsSendFill className='send-icon'></BsSendFill>Submit</div>
  
  
  
    </from>
   
  </div>
  <FaTimes onClick={toggleBlockV} className='cross-btn'></FaTimes>
  </div>           
              </div>
            
          
              )
            }
          </div>
        ))}
    </div>
  );
}

export default Card;
