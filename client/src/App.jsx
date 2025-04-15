import React from "react";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Programs from "./components/Programs";
import Plans from "./components/Plans";
import image from "./assets/gradient.png";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundColor: "#212121",
      minHeight: "100vh",
      color: "white",
      width: '100vw'
    }}>
      <Navbar />

      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Programs />
            <Plans />
            <Schedule />
            <Testimonials />
            <Contact />
          </>
        } />

        <Route path="/plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />

      </Routes>

      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
