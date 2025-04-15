import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import bgVideo from "../assets/gym-video.mp4";
import { Button, TextField, Typography, Box, Card } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../styles/Contact.css';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_KEY,
      import.meta.env.VITE_TEMPLATE_KEY,
      form.current,
      import.meta.env.VITE_PUBLIC_KEY
    )
      .then(() => {
        toast.success('Message sent successfully!', {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        form.current.reset();
      })
      .catch((err) => {
        toast.error("❌ Failed to send message.", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        console.error(err);
      });
  };

  return (
    <div className="contact" style={{
      position: "relative",
      height: "100vh",
      width: "100vw",
      overflow: "hidden"
    }}>
      <video
        src={bgVideo}
        autoPlay
        loop
        muted
        style={{
          height: '100%',
          width: "100%",
          objectFit: "cover",
          filter: "blur(2px)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />

      <Box sx={{
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: 4,
        height: "100%",
        px: 2
      }}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 400,
          color: "white",
          gap: 2,
          padding: 2,
          backgroundColor: "#00000070",
          borderRadius: 2
        }}>
          <Typography variant="h4" fontWeight={600}>Contact Us</Typography>
          <Typography variant="body1">Feel free to ask your doubts or give feedback.</Typography>

          <Box sx={{ display: 'flex', alignItems: "center", gap: 1 }}>
            <LocalPhoneIcon sx={{ fontSize: 24 }} />
            <Typography variant="subtitle1">+91 90xxxxxx</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: "center", gap: 1 }}>
            <EmailIcon sx={{ fontSize: 24 }} />
            <Typography variant="subtitle1">xyz@gmail.com</Typography>
          </Box>

          <Box sx={{ display: 'flex', alignItems: "center", gap: 1 }}>
            <LocationPinIcon sx={{ fontSize: 24 }} />
            <Typography variant="subtitle1">India</Typography>
          </Box>
        </Box>

        <Card elevation={3} sx={{
          maxWidth: 500,
          width: "100%",
          padding: 3,
          borderRadius: 3,
          backgroundColor: "#ffffffcc"
        }}>
          <Box
            component="form"
            ref={form}
            onSubmit={sendEmail}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2
            }}
          >
            <Box sx={{ display: 'flex', gap: 2 }}>
              <TextField fullWidth label="First Name" name="firstName" variant="outlined" />
              <TextField fullWidth label="Last Name" name="lastName" variant="outlined" />
            </Box>
            <TextField fullWidth label="Email" name="email" variant="outlined" />
            <TextField fullWidth label="Phone (Optional)" name="phone" variant="outlined" />
            <TextField
              fullWidth
              label="Message"
              name="message"
              variant="outlined"
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained">Submit</Button>
          </Box>
        </Card>
      </Box>
    </div>
  );
}

export default Contact;
