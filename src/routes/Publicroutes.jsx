import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from '../Component/Home/Home';
import Card from '../Component/Card/Card';
import data from '../Component/Card/Data';
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import Testimonial from '../Component/Testimonials/Testimonial';
import Footer from '../Component/Footer/Footer'
import Contact from '../Component/Contact/Contact';
import Aboutus from '../Component/Aboutus/Aboutus';



function Publicroutes() {
  return (
    <Router>
      <Navbar/>
      <Banner/>
    <Routes>
      <Route path="/" element={<Home></Home>} />
      <Route path="/category/:category" element={<Card data={data}></Card>} />
      <Route path="/testimonial" element={<Testimonial/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<Aboutus/>} />
    </Routes>
  <Footer/>
  </Router>
  )
}

export default Publicroutes