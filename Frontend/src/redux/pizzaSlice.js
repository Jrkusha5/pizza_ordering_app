import { createSlice } from '@reduxjs/toolkit';
import pizzaData from '../data/pizzaData'; // Mock pizza data

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState: {
    pizzas: pizzaData, // Initialize with the mock pizza data
  },
  reducers: {
    // You can add actions to manipulate pizzas if needed (e.g., adding new pizzas)
  },
});

export default pizzaSlice.reducer;
