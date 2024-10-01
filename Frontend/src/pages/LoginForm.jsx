import React, { useState } from 'react';
import { TextField, Box, Button, Typography, Checkbox, FormControlLabel } from '@mui/material';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
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
    // Perform login logic here
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
      <Typography variant="h6" color="textSecondary" align="center" mb={2}>
        Login
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
      <FormControlLabel
        control={
          <Checkbox
            checked={formData.rememberMe}
            onChange={handleChange}
            name="rememberMe"
          />
        }
        label="Remember me"
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        type="submit"
        sx={{ mt: 2 }}
      >
        LOGIN
      </Button>
      <Typography variant="body2" align="center" sx={{ mt: 2 }}>
        Haven’t an account? <a href="/signup">Sign up</a>
      </Typography>
    </Box>
  );
};

export default LoginForm;
