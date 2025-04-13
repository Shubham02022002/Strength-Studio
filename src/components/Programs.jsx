import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import icon from "../assets/features-first-icon.png";

function Programs() {
  return (
    <Box
      sx={{
        height: "100vh",
        backgroundColor: "#181C14",
        maskImage: "linear-gradient(to bottom, transparent, black 12%, black 80%, transparent)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 80%, transparent)",
        color: "white",
        px: { xs: 2, md: 6 },
        py: 5,
      }}
    >
      <Box sx={{ textAlign: "center", mb: 5 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Choose Program
        </Typography>
        <Typography variant="subtitle1" color="grey.400">
          Strength Studio provides a flexible range of programs <br />
          tailored to your needs.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {[
          "Basic Fitness",
          "Advanced Muscle Course",
          "Yoga Training",
          "New Gym Training",
          "Basic Muscle Course",
          "Body Building Course",
        ].map((title, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Box sx={{ display: "flex", alignItems: "flex-start" }}>
              <Box
                component="img"
                src={icon}
                alt=""
                sx={{ width: 60, height: 60, mr: 2 }}
              />
              <Box>
                <Typography variant="h6" fontWeight="bold">
                  {title}
                </Typography>
                <Typography variant="body2" color="grey.400" mb={1}>
                  This is the basic course which includes your <br />
                  basic workout schedule.
                </Typography>
                <Typography variant="caption" color="primary.light">
                  DISCOVER MORE
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Programs;
