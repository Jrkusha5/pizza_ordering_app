import React from 'react';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import { Box } from '@mui/material';
import FeaturedPizza from '../components/FeaturedPizza';
import {Card, CardContent, CardMedia, Typography,Grid, Avatar } from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { restaurants } from '../constants/restaurants';
import PopularPizzas from '../components/PopularPizzas';
import Fasting from '../components/Fasting';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <Box
      sx={{
        background: 'linear-gradient(to bottom, #fff, #f8c6a5 50%, #faf0eb)', // Updated gradient with three stops
        minHeight: '100vh',
      }}
    >
      
      <MainSection />
       {/* Moved FeaturedPizza inside the Box */}
    </Box>
    
    <FeaturedPizza />
    

    <Box sx={{ padding: '40px', backgroundColor: '#f5f5f5' }}>
      <Typography
        variant="h3"
        sx={{
          fontSize: '36px',
          fontWeight: 'bold',
          marginBottom: '20px',
          color: '#8C8C8C',
        }}
      >
        Top Restaurants
      </Typography>

      <Grid container spacing={3}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} md={4} key={restaurant.id}>
            <Card
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px',
                borderRadius: '16px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                backgroundColor: '#fff',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar
                  alt={restaurant.name}
                  src={restaurant.image}
                  sx={{ width: 56, height: 56, marginRight: '16px' }}
                />
                <CardContent sx={{ padding: '0' }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                    {restaurant.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    {restaurant.description}
                  </Typography>
                </CardContent>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  backgroundColor: '#f1f9ed',
                  padding: '10px 20px',
                  borderRadius: '10px',
                }}
              >
                <ShoppingBagIcon
                  sx={{ color: '#FFA500', marginRight: '8px' }}
                  fontSize="large"
                />
                <Box>
                  <Typography variant="body2" sx={{ color: '#999' }}>
                    Number of orders
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 'bold', color: '#FFA500' }}
                  >
                    {restaurant.orders}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    <PopularPizzas/>
    <Fasting/>
    
    </>
  );
};

export default Home;
