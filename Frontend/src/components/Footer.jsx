import React from 'react';
import { Box, Typography, Grid, TextField, IconButton, Link } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PizzaImage from '../assets/pizza.jpg'; 

const Footer = () => {
  return (
    <Box>
      {/* Upper section with logo and feedback */}
      <Box sx={{ backgroundColor: '#d7b38c', padding: '20px 0' }}>
        <Grid container justifyContent="flex-end" alignItems="center" sx={{ padding: '0 50px' }}>
          {/* Right side: Logo at the top and Feedback input at the bottom */}
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            
            {/* Pizza Text at the top */}
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#a64b00', display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
              <img src={PizzaImage} alt="Pizza Logo" style={{ marginRight: '10px', height: '30px' }} />
              Pizza
            </Typography>
            
            {/* Feedback input at the bottom */}
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', maxWidth: '350px' }}>
              <TextField
                variant="outlined"
                placeholder="Your feedback..."
                size="small"
                sx={{ width: '100%', backgroundColor: '#fff', borderRadius: '5px' }}
              />
              <IconButton color="primary" sx={{ marginLeft: '-40px', zIndex: 10 }}>
                <SendIcon sx={{ color: '#ffa500' }} />
              </IconButton>
            </Box>
            
          </Grid>
        </Grid>
      </Box>

      {/* Lower section with navigation and social links */}
      <Box sx={{ backgroundColor: '#d7b38c', color: '#fff', padding: '20px 50px' }}>
        <Grid container justifyContent="space-between" alignItems="center">
          {/* Navigation Links */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'left' }, marginBottom: { xs: '20px', md: '0px' } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' }, gap: '40px' ,marginLeft:'25px'}}>
              <Link href="/" color="inherit" underline="none" sx={{ fontWeight: 'bold', color: '#000', fontSize: '26px' }}>
                Home
              </Link>
              <Link href="/order" color="inherit" underline="none" sx={{ fontWeight: 'bold', color: '#000', fontSize: '26px' }}>
                Order
              </Link>
              <Link href="/about" color="inherit" underline="none" sx={{ fontWeight: 'bold', color: '#000', fontSize: '26px' }}>
                About Us
              </Link>
            </Box>
          </Grid>

          
        </Grid>

        <Box sx={{ borderTop: '1px solid #444', padding: '20px 0',  marginTop: '30px',backgroundColor: '#000', }}>
          {/* Social Media Icons */}
          <Grid item xs={12} md={4} sx={{ textAlign: { xs: 'center', md: 'right',backgroundColor: '#000', } }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, gap: '20px' }}>
              <FacebookIcon sx={{ color: '#fff', fontSize: '30px' }} />
              <LinkedInIcon sx={{ color: '#fff', fontSize: '30px' }} />
              <YouTubeIcon sx={{ color: '#fff', fontSize: '30px' }} />
            </Box>
          </Grid>
          <Typography variant="body2" sx={{ color: '#fff',marginLeft:'50px', marginBottom: '5px',fontSize:'23px', }}>
            &copy; 2024 Pizza All Rights Reserved.
            <Link href="/terms" color="inherit" underline="none" sx={{ color: '#fff', fontSize: '23px',marginLeft: '25px', }}>
            Terms & Conditions
          </Link>
          </Typography>
         
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
