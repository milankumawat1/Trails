import React from "react";
import background from "../../Assets/main-background.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import fagoogle from "../../Assets/fa-google.avif";
import "../Hero/hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-container flex">
        <img className="background" src={background} alt="background" />
        <h1 className="hero-head">Plan Your Next Hassle free holiday</h1>
      </div>
      <div className="hero-bottom flex">
        <div className="hero-shorts flex">
          <img style={{ width: "30px" }} src={fagoogle} alt="fagoogle"></img>
          <span className="shorts-span">4.6</span>
          <FaStar className="shorts-icons" />
          <span>rated</span>
        </div>

        <div className="hero-shorts flex">
          <FaCheckCircle className="shorts-icons" />
          <span className="shorts-span">100% Customised Trips</span>
        </div>

        <div className="hero-shorts flex">
          <FaCheckCircle className="shorts-icons" />
          <span className="shorts-span">95% Visa Success Rate</span>
        </div>

        <div className="hero-shorts flex">
          <FaCheckCircle className="shorts-icons" />
          <span className="shorts-span">24x7 Concierge</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
