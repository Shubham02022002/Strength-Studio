import React from "react";
import { Typography } from "@mui/material";
import '../../styles/Footer.css';
function Footer() {
    return (
        <div className="footer">
            <div className="footer-text">
                <Typography>
                    Copyright &copy; {new Date().getFullYear()} Strength Studio. <br />
                    All rights reserved.
                </Typography>

            </div>
        </div>
    );
}

export default Footer;
