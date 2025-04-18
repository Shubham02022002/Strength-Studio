import React from "react";
import '../../styles/Hero.css';
import { Link } from 'react-router-dom';
import { Button, Typography } from "@mui/material";
function Hero() {
  return (
    <div className="hero-section">
      <div className="message">
        <Typography variant="h4">
          Unleash the {" "}
          <svg
            className="neon-border"
            viewBox="0 0 500 100"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text x="40" y="130" className="neon-stroke">NEW YOU</text>
          </svg>
        </Typography>
        <Typography variant="h2" style={{
          overflowY: "hidden"
        }} fontFamily={'fantasy'} letterSpacing={3}>EASE WITH OUR GYM</Typography>
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