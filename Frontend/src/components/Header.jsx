
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import PizzaImage from '../assets/hrpa.png'; 
const Header = () => {
  return (
    <AppBar position="static" elevation={0} sx={{ backgroundColor: '#FFF8F1', color: 'black', padding: '10px 0' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Box display="flex" alignItems="center">
          <img src={PizzaImage} alt="Pizza Logo" style={{ width: '40px', marginRight: '10px' }} />
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Pizza</Typography>
        </Box>
        <Box sx={{fontSize:'60px', justifyContent:'space-between'}}>
          <Button sx={{ color: '#f57c00', fontWeight: 'bold',fontSize:'20px' }}>Home</Button>
          <Button sx={{ color: 'black',fontSize:'20px' }}>Orders</Button>
          <Button sx={{ color: 'black',fontSize:'20px' }}>Who we are</Button>
        </Box>
        <Button variant="contained" sx={{ backgroundColor: '#fd8812', fontSize:'20px', color: 'white', borderRadius: '5px' }}>
          Register
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
