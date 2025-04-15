import React from "react";
import '../../styles/Hero.css';
import { Link } from 'react-router-dom';
import { Button, Typography } from "@mui/material";
function Hero() {
  return (
    <div className="hero-section">
      <div className="message">
        <Typography variant="h5">Unlish the NEW YOU</Typography>
        <Typography variant="h2">EASE WITH OUR GYM</Typography>
        <Link to='/plans' style={{
          textDecoration: 'none',
          scrollBehavior: 'smooth'
        }}>
          <Button variant="contained" size="large">
            BECOME A MEMBER
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;