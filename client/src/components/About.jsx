import React from 'react';
import { Box, Typography } from '@mui/material';
import aboutImg from '../assets/aboutImg.jpg';

const features = [
    {
        title: "Best Training",
        desc: "Top-tier gym setup that pushes your personal growth.",
    },
    {
        title: "Experienced Trainers",
        desc: "Certified pros guiding your fitness journey.",
    },
    {
        title: "Modern Equipment",
        desc: "Muscle Nation-grade tools for effective training.",
    },
    {
        title: "Monthly Challenges",
        desc: "Synergize with others and push your limits.",
    },
];

const About = () => {
    return (
        <Box
            sx={{
                bgcolor: '#000',
                color: '#fff',
                maskImage: "linear-gradient(to bottom, transparent, black 12%, black 80%, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent, black 12%, black 80%, transparent)",
                minHeight: '100vh',
                p: { xs: 2, md: 6 },
                display: 'flex',
                overflow: 'hidden',
                gap: 4,
                flexDirection: { xs: 'column', md: 'row' },
            }}
        >

            <Box
                sx={{
                    flex: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: 3,
                }}
            >
                <Typography variant="h4" fontWeight="bold">
                    Why Choose Us
                </Typography>
                <Typography variant="body1" sx={{ color: '#ccc', maxWidth: 600 }}>
                    When picking a gym, look at guest access, hours, location, and other perks
                    to get the best experience.
                </Typography>


                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: 3,
                        mt: 2,
                    }}
                >
                    {features.map((item, idx) => (
                        <Box
                            key={idx}
                            sx={{
                                bgcolor: '#1a1a1a',
                                p: 2,
                                borderRadius: 2,
                                border: '1px solid #333',
                            }}
                        >
                            <Typography variant="subtitle1" fontWeight="bold">
                                {item.title}
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#aaa' }}>
                                {item.desc}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Box>


            <Box
                sx={{
                    flex: 4,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src={aboutImg}
                    alt="About Gym"
                    style={{
                        width: '100%',
                        maxWidth: 350,
                        height: 'auto',
                        borderRadius: '16px',
                        objectFit: 'cover',
                    }}
                />
            </Box>
        </Box>
    );
};

export default About;
