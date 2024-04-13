import React, { useState } from "react";
import plane from "../../Assets/plane.svg";
import visa from "../../Assets/visa.svg";
// import { Link } from "react-router-dom";
import { BsSendFill } from "react-icons/bs";
import "./advertisement.css";
import { FaTimes } from "react-icons/fa";
import l from "../../Assets/form-logo.png";
import map from "../../Assets/form-map.png";
import p from "../../Assets/form-plane.png";
import text from "../../Assets/form-text.png";
import visatext from "../../Assets/form-visa-text.png";
import formpic from "../../Assets/form-visa-pic.png";
import emailjs from "@emailjs/browser";

function Plane() {
  const [block, setBlock] = useState(false);
  const toggleBlock = () => {
    setBlock(!block);
  };

  const [block2, setBlock2] = useState(false);
  const toggleBlock2 = () => {
    setBlock2(!block2);
  };

  //----------- plane--------------
  const [passenger, setPassenger] = useState(1);
  const incrementPassengers = () => {
    setPassenger((prevPassengers) => prevPassengers + 1);
  };

  const decrementPassengers = () => {
    if (passenger > 1) {
      setPassenger((prevPassengers) => prevPassengers - 1);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [from, setFrom] = useState("");
  const [triplocation, setTripLocation] = useState("");
  const [departureDate, setdepartureDate] = useState("");
  const [arrivalDate, setarrivalDate] = useState("");

  // const [oneWayChecked, setOneWayChecked] = useState(false);
  // const [roundChecked, setRoundChecked] = useState(false);

  // const handleOneWayChange = () => {
  //   setOneWayChecked(!oneWayChecked);
  // };

  // const handleRoundChange = () => {
  //   setRoundChecked(!roundChecked);
  // };

  const [selectedOption, setSelectedOption] = useState(null);

  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID
    const serviceId = "service_moe4fcu";
    const templateId = "template_mwnqvyu";
    const publicKey = "UldQk-J9B3sXHTGNY";

    // creating object containing dynamic template
    const templateParams = {
      from_name: name,
      from_email: email,
      from_mobile: mobile,
      from: from,
      triplocation: triplocation,
      departuredate: departureDate,
      arrivaldate: arrivalDate,
      from_category: "FLIGHT INQUIRE",
      category: selectedOption,
      travellers: passenger,
    };

    // console.log(templateParams);

    // send mail
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully !", response, templateParams);
        setName("");
        setEmail("");
        setMobile("");
        setPassenger(1);
        setTripLocation("");
        setdepartureDate("");
        setFrom("");
        setarrivalDate("");
        alert("Thank You For Submission.. We will get to you soon");
      })
      .catch((error) => {
        alert("error submitting form please contact us.")
      });
    toggleBlock2();
  };

  // Visa--------------------------------------------------------------------------
  const [pass, setPass] = useState(1);
  const incrementPass = () => {
    setPass((prevPass) => prevPass + 1);
  };

  const decrementPass = () => {
    if (pass > 1) {
      setPass((prevPassengersV) => prevPassengersV - 1);
    }
  };

  const [nameV, setNameV] = useState("");
  const [emailV, setEmailV] = useState("");
  const [mobileV, setMobileV] = useState("");
  const [triplocationV, setTripLocationV] = useState("");
  const [departureDateV, setdepartureDateV] = useState("");
  const [arrivalDateV, setarrivalDateV] = useState("");

  // Your EmailJS service ID
  // const serviceId= "service_ta1afw8";
  // const templateId= "template_lfu5wzc";
  // const publicKey= "g3yNN43orEv327zxK";

  // creating object containing dynamic template
  // const templateParams={
  //   from_name: nameV,
  //   from_email: emailV,
  //   from_mobile: mobileV,
  //   triplocation: triplocationV,
  //   departuredate: departureDateV,
  //   arrivaldate: arrivalDateV,
  //   from_category: "VISA INQUIRE"
  // }

  const handleSubmitV = (e) => {
    e.preventDefault();

    // Your EmailJS service ID
    const serviceId = "service_moe4fcu";
    const templateId = "template_mwnqvyu";
    const publicKey = "UldQk-J9B3sXHTGNY";

    // creating object containing dynamic template
    const templateParamsV = {
      from_name: nameV,
      from_email: emailV,
      from_mobile: mobileV,
      triplocation: triplocationV,
      departuredate: departureDateV,
      arrivaldate: arrivalDateV,
      from: "",
      from_category: "VISA INQUIRE",
      category: "",
      travellers: pass,
    };

    // send mail
    emailjs
      .send(serviceId, templateId, templateParamsV, publicKey)
      .then((response) => {
        // console.log("Email sent successfully !", response);
        setNameV("");
        setEmailV("");
        setMobileV("");
        setPass(1);
        setTripLocationV("");
        setdepartureDateV("");
        setarrivalDateV("");
        alert("Thank You For Submission.. We will get to you soon");
      })
      .catch((error) => {
        alert("error submitting form please contact us.");
      });
    toggleBlock();
    
  };

  return (
    <div className="categ-cont flex">
      <div onClick={toggleBlock}>
        <img src={visa} alt="visa" className="visa-photo" />
      </div>
      <div onClick={toggleBlock2}>
        <img src={plane} alt="plane" className="plane-photo" />
      </div>
      {block2 && (
        <div className="modal">
          <div className="form">
            <div className="form-left">
              <div className="form-image-container">
                <img src={text} alt="" className="text-form" />
              </div>
              <div className="form-image-container">
                <img src={map} alt="" className="form-map small-width" />
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
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <input
                  className="in"
                  placeholder="Your email"
                  type="email"
                  name={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  className="in"
                  placeholder="Your moble no."
                  type="tel"
                  name={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
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
                  <label className="form-lab">To</label>
                  <div className="input-group flex">
                    <input
                      className="in"
                      type="text"
                      id="passenger"
                      name={triplocation}
                      onChange={(e) => {
                        setTripLocation(e.target.value);
                      }}
                      required
                    />
                  </div>

                  <label className="form-lab" htmlFor="passenger">
                    From
                  </label>
                  <div className="input-group flex">
                    <input
                      className="in"
                      type="text"
                      id="passenger"
                      name={from}
                      onChange={(e) => {
                        setFrom(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="category-label passenger-input flex">
                  <label className="form-lab">Category</label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOption === "one-way"}
                      onChange={() => handleCheckboxChange("one-way")}
                    
                    />
                    <span>One-Way</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      checked={selectedOption === "round"}
                      onChange={() => handleCheckboxChange("round")}
                    />
                    <span>Round</span>
                  </label>
                </div>

                <div className="passenger-input flex">
                  <label className="form-lab" htmlFor="passenger">
                    Departure Date
                  </label>
                  <div className="input-group flex">
                    <input
                      className="in"
                      type="date"
                      id="passenger"
                      name={departureDate}
                      onChange={(e) => {
                        setdepartureDate(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="passenger-input flex">
                  <label className="form-lab" htmlFor="passenger">
                    Arrival Date
                  </label>
                  <div className="input-group flex">
                    <input
                      className="in"
                      type="date"
                      id="passenger"
                      name={arrivalDate}
                      onChange={(e) => {
                        setarrivalDate(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-button flex pointer">
                  <BsSendFill className="send-icon"></BsSendFill>Submit
                </button>
              </form>
            </div>
            <FaTimes onClick={toggleBlock2} className="cross-btn"></FaTimes>
          </div>
        </div>
      )}

      {block && (
        <div className="modal">
          <div className="form">
            <div className="form-left">
              <div className="form-image-container">
                <img src={visatext} alt="" className="text-form" />
              </div>
              <div className="form-image-container">
                <img src={formpic} alt="" className="form-map" />
              </div>
              {/* <div className="form-image-container">
  <img src={p} alt="" className="form-plane" />
  </div> */}
              <div className="form-image-container">
                <img src={l} alt="" className="form-logo" />
              </div>
            </div>

            <div className="form-right">
              <form onSubmit={handleSubmitV} className="form-main-fields">
                <input
                  className="in"
                  placeholder="Your name"
                  type="text"
                  name={nameV}
                  onChange={(e) => setNameV(e.target.value)}
                  required
                />
                <input
                  className="in"
                  placeholder="Your email"
                  type="email"
                  name={emailV}
                  onChange={(e) => setEmailV(e.target.value)}
                  required
                />
                <input
                  className="in"
                  placeholder="Your moble no."
                  type="tel"
                  name={mobileV}
                  onChange={(e) => setMobileV(e.target.value)}
                  required
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
                    <input
                      className="in"
                      type="text"
                      id="passenger"
                      name={triplocationV}
                      onChange={(e) => {
                        setTripLocationV(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="passenger-input flex">
                  <label className="form-lab" htmlFor="passenger">
                    Departure Date
                  </label>
                  <div className="input-group flex">
                    <input
                      className="in"
                      type="date"
                      id="passenger"
                      name={departureDateV}
                      onChange={(e) => {
                        setdepartureDateV(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <div className="passenger-input flex">
                  <label className="form-lab" htmlFor="passenger">
                    Arrival Date
                  </label>
                  <div className="input-group flex">
                    <input
                      className="in"
                      type="date"
                      id="passenger"
                      name={arrivalDateV}
                      onChange={(e) => {
                        setarrivalDateV(e.target.value);
                      }}
                      required
                    />
                  </div>
                </div>

                <button type="submit" className="submit-button flex pointer">
                  <BsSendFill className="send-icon"></BsSendFill>Submit
                </button>
              </form>
            </div>
            <FaTimes onClick={toggleBlock} className="cross-btn"></FaTimes>
          </div>
        </div>
      )}
    </div>
  );
}

export default Plane;
