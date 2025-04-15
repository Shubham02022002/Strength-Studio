import React from "react";
import { Card, CardContent, Typography, Avatar, Box } from "@mui/material";
import t1 from "../assets/testimonial1.jpg";
import t2 from "../assets/testimonial2.jpg";
import t3 from "../assets/testimonial3.jpg";

const testimonials = [
  { name: "Sara K.", quote: "This gym changed my life!", img: t1 },
  { name: "Shubham", quote: "World class amenities", img: t2 },
  { name: "Anlea Richards.", quote: "Best trainers and community.", img: t3 },
];

function Testimonials() {
  return (
    <div>

      <Typography variant="h4" textAlign={'center'}>Testimonials</Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: 3,
          height: "40vh",
          padding: 3,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 300,
              padding: 2,
              borderRadius: 3,
              textAlign: "center",
              boxShadow: 4,
              backgroundColor: "#fafafa"
            }}
          >
            <CardContent>
              <Avatar
                alt={testimonial.name}
                src={testimonial.img}
                sx={{ width: 64, height: 64, margin: "0 auto 16px" }}
              />
              <Typography variant="h6" component="p" gutterBottom>
                {testimonial.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" fontStyle="italic">
                "{testimonial.quote}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>

  );
}

export default Testimonials;
