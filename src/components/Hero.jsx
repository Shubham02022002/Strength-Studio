import React from "react";
import '../../styles/Hero.css';
import bgImg from "../assets/bgImg.jpg";
import { Typography } from "@mui/material";
function Hero() {
  return (
    <div className="hero-section">
      <div className="message">
        <Typography variant="h2">Unlish the NEW YOU</Typography>
        <Typography variant="h2">EASE WITH OUR GYM</Typography>
      </div>
    </div>
  );
}

export default Hero;