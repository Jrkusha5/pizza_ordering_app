import React, { useRef } from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Avatar, Button } from '@mui/material';
import { pizzas } from '../constants/pizzas'; // Import pizza data
import PizzaImage2 from '../assets/vpizza.jpg';
import { useSwipeable } from 'react-swipeable';

const Fasting = () => {
  const sliderRef = useRef();

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => scrollRight(),
    onSwipedRight: () => scrollLeft(),
  });

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box
      {...handlers} // Add swipe functionality
      sx={{
        padding: '40px',
        backgroundColor: '#FAF3E0',
        overflowX: 'hidden', // Hide scroll bar
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#8C8C8C',
        }}
      >
        Popular Pizzas
      </Typography>

      {/* The sliding container */}
      <Box
        ref={sliderRef} // Reference to the slider
        sx={{
          display: 'flex',
          gap: '16px',
          overflowX: 'auto', // Allow horizontal scrolling
          scrollBehavior: 'smooth',
        }}
      >
        {pizzas.map((pizza) => (
          <Card
            key={pizza.id}
            sx={{
              minWidth: '280px',
              padding: '20px',
              borderRadius: '16px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              textAlign: 'center',
              backgroundColor: '#fff',
            }}
          >
            <CardMedia
              component="img"
              image={PizzaImage2}
              alt={pizza.name}
              sx={{
                width: '200px',
                height: '200px',
                margin: '0 auto',
                borderRadius: '50%', // Make image circular
              }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize: '24px', textAlign: 'left', marginTop: '16px' }}>
                {pizza.name}
              </Typography>
              <Typography variant="body2" sx={{ color: '#666', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px', textAlign: 'left' }}>
                {pizza.ingredients}
              </Typography>

              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', color: '#28a745', marginBottom: '10px', textAlign: 'left' }}
              >
                {pizza.price} Birr
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FFA500',
                    color: '#fff',
                    padding: '8px 20px',
                    fontSize: '14px',
                    borderRadius: '8px',
                    marginLeft: '15px',
                  }}
                >
                  Order
                </Button>
              </Typography>
            </CardContent>

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: '20px',
                paddingTop: '10px',
                borderTop: '1px solid #e0e0e0',
              }}
            >
              <Avatar src={pizza.restaurantImage} alt={pizza.restaurant} sx={{ width: 64, height: 64 }} />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {pizza.restaurant}
              </Typography>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Fasting;
