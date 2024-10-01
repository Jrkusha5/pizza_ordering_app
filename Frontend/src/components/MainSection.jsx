import React from 'react';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import PizzaImage from '../assets/pizza2.jpg';
import PizzaImage2 from '../assets/vpizza.jpg'; // Ensure the image path is correct

const MainSection = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '40px', position: 'relative', minHeight: '500px' }}>
      {/* Text Section */}
      <Box sx={{ flex: 1,marginLeft:'120px', }}>
        <Typography variant="h2" sx={{ color: '#f57c00',fontSize:'100px', fontWeight: 'bold', marginBottom: '20px' }}>
          Order <span >us</span>
        </Typography>
        <Typography variant="body1" sx={{ color: 'black',fontSize:'25px', maxWidth: '800px', marginBottom: '30px' }}>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without.
        </Typography>

        {/* Search Box */}
        <TextField
          variant="outlined"
          placeholder="Search"
          sx={{ borderRadius: '50px', backgroundColor: 'white', width: '300px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: '#f57c00' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Full Pizza Image */}
      <Box  >
        <img src={PizzaImage2} alt="Pizza" style={{ width: '900px', height: '900px',marginBottom:'20px', objectFit: 'contain',borderRadius: '50%' }} />
      </Box>
    </Box>
  );
};

export default MainSection;
