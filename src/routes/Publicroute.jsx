import React from 'react'
import Navbar from "../Components/Navbar/Navbar";

import Card from "../Components/Card/Card";
import Testimonial from "../Components/Testimonials/Testimonial";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import data from "../Components/Card/Data";
import Home from "../Components/Home/Home";
import Aboutus from "../Components/Aboutus/Aboutus";
import Footer from "../Components/Footer/Footer";

function Publicroute() {
  return (
    <Router>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>} />

      <Route path="/category/:category" element={<Card data={data} />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/about" element={<Aboutus></Aboutus>}></Route>
    </Routes>
    <Footer></Footer>
  </Router>
  )
}

export default Publicroute