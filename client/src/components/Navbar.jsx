import React from "react";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        zIndex: 1000,
        backdropFilter: "blur(1px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        padding: "10px 30px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight={700}>
          <Link to='/' style={{ textDecoration: "none", color: "inherit" }}>
            Strength Studio
          </Link>
        </Typography>

        <ul
          style={{
            display: "flex",
            gap: "20px",
            listStyleType: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
              <Typography variant="body1">Home</Typography>
            </Link>
          </li>
          <li>
            <Typography variant="body1">About</Typography>
          </li>
          <li>
            <Link to='/contact' style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="body1">Contact</Typography>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
