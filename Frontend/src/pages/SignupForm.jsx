import React, { useState } from 'react';
import { TextField, Box, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    location: '',
    phoneNumber: '',
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation and submission logic
    console.log(formData);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '300px',
        margin: 'auto',
        padding: '40px',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
      }}
      component="form"
      onSubmit={handleSubmit}
    >
      <Typography variant="h4" color="primary" align="center" mb={2}>
        Pizza
      </Typography>

      <TextField
        label="Email address"
        variant="outlined"
        margin="normal"
        fullWidth
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <TextField
        label="Confirm Password"
        variant="outlined"
        margin="normal"
        fullWidth
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <TextField
        label="Location"
        variant="outlined"
        margin="normal"
        fullWidth
        name="location"
        value={formData.location}
        onChange={handleChange}
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        margin="normal"
        fullWidth
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.acceptTerms}
            onChange={handleChange}
            name="acceptTerms"
          />
        }
        label="I accept the Terms and Conditions"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
        sx={{ mt: 2 }}
      >
        SIGN UP
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Already have an account? <a href="/login">Login</a>
      </Typography>
    </Box>
  );
};

export default SignupForm;
