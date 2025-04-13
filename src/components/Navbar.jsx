import React from "react";
import { Typography } from "@mui/material";
function Navbar() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: "space-between" }}>
        <Typography variant="h2">
          Strength Studio
        </Typography>
        <div style={{
          display: "flex",
          margin: "2px",
          padding: "5px",
          justifyContent: 'space-between',
          marginRight: '30px'
        }}>
          <li style={{ listStyleType: "none", margin: "10px" }}> <Typography>Home</Typography ></li>
          <li style={{ listStyleType: "none", margin: "10px" }}> <Typography>About</Typography ></li>
          <li style={{ listStyleType: "none", margin: "10px" }}> <Typography>Contact</Typography ></li>

        </div>
      </div>
    </div>
  );
}

export default Navbar;
