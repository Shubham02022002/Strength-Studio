import React from 'react';
import { Button, Card, Paper, Typography, Box } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import '../../styles/Plans.css';
const plans = [
  {
    title: 'Basic',
    price: '₹1500',
    description: 'Ideal for beginners, includes access to all gym equipment',
    features: [
      'Access to gym equipment and facilities.',
      'Flexible hours for early risers or night owls.',
      'Access to one local branch.',
    ],
  },
  {
    title: 'Standard',
    price: '₹3000',
    description: 'For fitness freaks, includes all basic and more',
    features: [
      'Everything in Basic Plan.',
      'Group fitness classes (yoga, spin, etc.).',
      'Nutrition coaching & personalized workout plans.',
      'All branches access nationwide.',
    ],
  },
  {
    title: 'Premium',
    price: '₹5000',
    description: 'All-inclusive with personal training and nutrition consultations',
    features: [
      'Everything in Standard Plan.',
      '24/7 access to premium facilities.',
      'Complimentary training sessions monthly.',
      'Access to events and workshops.',
      'Unlimited access to all branches.',
    ],
  },
];

const Plans = () => {
  return (
    <div className='plans' id='plans'>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#121212',
          py: 10,
          px: { xs: 2, md: 6 },
          overflow: 'hidden',
        }}
      >
        <Typography variant='h3' textAlign={'center'}>Flexible Membership Plans</Typography>
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            height: "100%",
            gap: 4,
            justifyContent: 'center',
            alignItems: 'stretch', 
          }}
        >
          {plans.map((plan, index) => (
            <Paper
              key={index}
              elevation={10}
              sx={{
                width: 330,
                mt: "20px",
                mb: "20px",
                height: 400, 
                borderRadius: 4,
                backgroundColor: '#1e1e1e',
                color: '#fff',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '&:hover': {
                  boxShadow: '0 0 12px #90caf9',
                },
              }}
            >
              <Card
                sx={{
                  background: 'transparent',
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                }}
              >
                <Box>
                  <Typography variant="h5" color="primary" textAlign="center" mb={1}>
                    {plan.title}
                  </Typography>

                  <Typography
                    variant="body2"
                    sx={{ color: '#bbb', textAlign: 'center', mb: 2 }}
                  >
                    {plan.description}
                  </Typography>

                  <Typography
                    variant="h4"
                    sx={{
                      color: '#fff',
                      textAlign: 'center',
                      fontWeight: 700,
                      mb: 2,
                    }}
                  >
                    {plan.price}
                  </Typography>

                  {plan.features.map((feature, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 1,
                        mb: 1,
                        color: '#ccc',
                        fontSize: '0.9rem',
                      }}
                    >
                      <CheckIcon sx={{ fontSize: 18, color: '#90caf9', mt: '2px' }} />
                      <span>{feature}</span>
                    </Box>
                  ))}
                </Box>

                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    borderRadius: '30px',
                    mt: 2,
                    py: 1,
                    fontWeight: 'bold',
                    letterSpacing: '0.5px',
                  }}
                >
                  Get Started
                </Button>
              </Card>
            </Paper>
          ))}
        </Box>
      </Box>
    </div>

  );
};

export default Plans;
