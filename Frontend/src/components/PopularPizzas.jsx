import React from 'react';
import { Box, Grid, Card, CardMedia, CardContent, Typography, Avatar, Button } from '@mui/material';
import { pizzas } from '../constants/pizzas'; // Import pizza data
import PizzaImage2 from '../assets/vpizza.jpg';

const PopularPizzas = () => {
  return (
    <Box sx={{ padding: '40px', backgroundColor: '#FAF3E0' }}>
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

      <Grid container spacing={3} sx={{margin:' '}}>
        {pizzas.map((pizza) => (
          <Grid item xs={4} sm={6} md={4} key={pizza.id}>
            <Card
              sx={{
                padding: '16px',
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
    width: '350px', 
    height: '350px', 
    margin: '0 auto', 
    borderRadius: '50%' // Make the image a full circle
  }}
/>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', fontSize:'34px',textAlign: 'left', marginTop: '16px' }}>
                  {pizza.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#666',fontSize:'18px', fontWeight:'bold',marginBottom: '10px',textAlign: 'left' }}>
                  {pizza.ingredients}
                </Typography>

                <Typography
                  variant="h4"
                  sx={{ fontWeight: 'bold', color: '#28a745', marginBottom: '10px',textAlign: 'left' }}
                >
                  {pizza.price} Birr
                  <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#FFA500',
                    color: '#fff',
                    padding: '10px 30px',
                    fontSize: '16px',
                    borderRadius: '8px',
                    marginLeft: '20px',
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
                  textAlign: 'left'
                }}
              >
                <Avatar src={pizza.restaurantImage}  
  sx={{ width: 64, height: 64 }}  alt={pizza.restaurant} />
                <Typography variant="body1" sx={{ fontWeight: 'bold', fontSize:'20px'  }}>
                  {pizza.restaurant}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularPizzas;
