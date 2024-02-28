import React from 'react'
import Navbar from "../Components/Navbar/Navbar";

import Card from "../Components/Card/Card";
import Testimonial from "../Components/Testimonials/Testimonial";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import data from "../Components/Card/Data";
import Home from "../Components/Home/Home";
import Aboutus from "../Components/Aboutus/Aboutus";
import Footer from "../Components/Footer/Footer";
import Contact from "../Components/Contact/Contact";
import { useEffect } from 'react';
import Form from '../Components/Forms/Form';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return null;
}

function Publicroute() {
  return (
    <Router>
      <ScrollToTop></ScrollToTop>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Home></Home>} />

      <Route path="/category/:category" element={<Card data={data} />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<Aboutus></Aboutus>}></Route>
    </Routes>
    <Footer></Footer>
    {/* <Form></Form> */}
  </Router>
  )
}

export default Publicroute