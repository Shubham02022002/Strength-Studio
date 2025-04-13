import React from "react";
import Hero from "./components/Hero";
import Schedule from "./components/Schedule";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import image from "./assets/gradient.png"
import Programs from "./components/Programs";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundColor: "#212121",
      height: "100vh",
      color: "white",
      width: '100vw'
    }}>
      <ToastContainer />
      <Navbar />
      <Hero />
      <Programs />
      <Schedule />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
