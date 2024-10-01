import React, { useEffect } from 'react';
import { Box, Typography, Checkbox, FormControlLabel, Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPizza, increaseQuantity, decreaseQuantity, toggleTopping } from '../redux/orderSlice';
import pizzaData from '../data/pizzaData';

const PizzaOrder = () => {
  const { pizzaId } = useParams();
  const dispatch = useDispatch();

  const { selectedPizza, quantity, selectedToppings } = useSelector((state) => state.order);
  const pizzas = useSelector((state) => state.pizza.pizzas);

  useEffect(() => {
    const pizza = pizzas.find((p) => p.id === pizzaId);
    if (pizza) {
      dispatch(setSelectedPizza(pizza));
    }
  }, [pizzaId, pizzas, dispatch]);

  if (!selectedPizza) return <Typography>Loading pizza...</Typography>;

  const handleToppingChange = (e) => {
    const { name, checked } = e.target;
    dispatch(toggleTopping({ topping: name, value: checked }));
  };

  const totalPrice = selectedPizza.price * quantity;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '40px',
        backgroundColor: '#f9f4ef',
        borderRadius: '10px',
        maxWidth: '1000px',
        margin: 'auto',
      }}
    >
      {/* Left side: Pizza Image */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <img
          src={selectedPizza.image} // Main pizza image
          alt={selectedPizza.name}
          style={{ width: '300px', borderRadius: '50%' }}
        />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {selectedPizza.smallImages.map((smallImage, index) => (
            <img
              key={index}
              src={smallImage}
              alt={`${selectedPizza.name} variant ${index + 1}`}
              style={{ width: '80px', borderRadius: '50%', marginRight: '10px' }}
            />
          ))}
        </Box>
      </Box>

      {/* Right side: Pizza Details */}
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Typography variant="h2" fontWeight="bold" sx={{ mb: 2 }}>
          {selectedPizza.name}
        </Typography>

        {/* Ingredients */}
        <Box sx={{ mb: 3 }}>
          {selectedPizza.ingredients.map((ingredient, index) => (
            <Typography key={index} sx={{ mb: 1 }}>
              {ingredient}
            </Typography>
          ))}
        </Box>

        {/* Toppings */}
        <Box sx={{ mb: 3 }}>
          {selectedPizza.availableToppings.map((topping, index) => (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedToppings[topping.toLowerCase()]}
                  onChange={handleToppingChange}
                  name={topping.toLowerCase()}
                />
              }
              label={topping}
            />
          ))}
        </Box>

        {/* Quantity Control */}
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <IconButton onClick={() => dispatch(decreaseQuantity())}>
            <Remove />
          </IconButton>
          <Typography variant="h6" sx={{ mx: 2 }}>
            {quantity}
          </Typography>
          <IconButton onClick={() => dispatch(increaseQuantity())}>
            <Add />
          </IconButton>
          <Typography variant="h6" sx={{ ml: 2, color: 'green' }}>
            {totalPrice} Birr
          </Typography>
        </Box>

        {/* Order Button */}
        <Button
          variant="contained"
          color="warning"
          sx={{
            width: '200px',
            height: '50px',
            fontSize: '18px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 2,
          }}
        >
          Order
        </Button>
      </Box>
    </Box>
  );
};

export default PizzaOrder;
