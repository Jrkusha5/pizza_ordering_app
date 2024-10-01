import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Card, CardContent, IconButton } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import PizzaImage1 from '../assets/images.png'; // Add your pizza image paths here
import PizzaImage2 from '../assets/vpizza.jpg';
import PizzaImage3 from '../assets/pizza2.jpg';

const FeaturedPizza = () => {
  const featuredPizza = [
    {
      id: 1,
      image: PizzaImage3,
      bgColor: '#333333',
    },
    {
      id: 2,
      image: PizzaImage3,
      bgColor: '#503722',
    },
    {
      id: 3,
      image: PizzaImage3,
      bgColor: '#145f3c',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredPizza.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000); // Auto-change every 4 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const currentPizza = featuredPizza[currentIndex];

  return (
    <>
        <Box sx={{ display: 'flex', flexDirection: 'column',fontSize:'20px',paddingTop:'40px', 
           paddingLeft: '200px', background: '#f8efe4',width:'100%' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column',fontSize:'20px',paddingTop:'40px',  paddingLeft: '20px',  }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: '56px',
          marginBottom: '20px',
          color: '#8C8C8C',
        }}
      >
        Featured pizza
      </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column',fontSize:'20px',paddingTop:'40px',  paddingLeft: '20px',
       backgroundColor: '#f8c6a5)' }}>

      <Card
        sx={{
          display: 'flex',
          maxWidth: '1000px',
          borderRadius: '16px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          overflow: 'hidden',
        }}
      >
        <CardContent
          sx={{
            flex: 1,
            backgroundColor: currentPizza.bgColor,
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            color: '#fff',
          }}
        >
          <Typography
            variant="h4"
            sx={{ color: '#fff', fontWeight: 'bold',maxWidth:'500px', marginBottom: '16px' }}
          >
            Make Your First Order and Get{' '}
            <Typography
              variant="h4"
              component="span"
              sx={{ color: '#FFA500', fontWeight: 'bold' }}
            >
              50% Off
            </Typography>
          </Typography>
          <Typography variant="body1" sx={{ color: '#ccc', marginBottom: '32px',fontSize: '24px', }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#FFA500', color: '#fff', padding: '10px 24px', fontSize: '16px', fontWeight: 'bold' }}
          >
            Order Now
          </Button>
        </CardContent>

        <Box
          sx={{
            flex: 1,
            position: 'relative',
          }}
        >
          <img
            src={currentPizza.image}
            alt="Pizza"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
      </Card>

      {/* Dots for navigation */}
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        {featuredPizza.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{
              color: index === currentIndex ? '#FFA500' : '#ccc', // Highlight the current dot
              padding: '8px',
              margin: '0 5px',
            }}
          >
            <FiberManualRecordIcon sx={{ fontSize: '12px' }} />
          </IconButton>
        ))}
      </Box>
    </Box>
    </Box>
    </>
  );
};

export default FeaturedPizza;
