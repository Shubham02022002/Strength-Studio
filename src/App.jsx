import React from "react";
import Hero from "./components/Hero";
import Trainers from "./components/Trainers";
import Schedule from "./components/Schedule";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import image from "./assets/gradient.png"

function App() {
  return (
    <div style={{
      backgroundImage: `url(${image})`,
      backgroundColor: "#212121",
      height: "100vh",
      color: "white",
      width: '100vw'
    }}>
      <Navbar />
      <Hero />
      <Trainers />
      <Schedule />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
