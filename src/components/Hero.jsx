import React from "react";
import '../../styles/Hero.css';
import { Button, Typography } from "@mui/material";
function Hero() {
  return (
    <div className="hero-section">
      <div className="message">
        <Typography variant="h5">Unlish the NEW YOU</Typography>
        <Typography variant="h2">EASE WITH OUR GYM</Typography>
        <Button variant="contained" size="large">BECOME A MEMBER</Button>
      </div>
    </div>
  );
}

export default Hero;