import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    selectedPizza: null,
    quantity: 1,
    selectedToppings: {
      onions: false,
      olives: false,
    },
  },
  reducers: {
    setSelectedPizza: (state, action) => {
      state.selectedPizza = action.payload;
      state.quantity = 1; // Reset quantity when a new pizza is selected
      state.selectedToppings = { onions: false, olives: false }; // Reset toppings
    },
    increaseQuantity: (state) => {
      state.quantity += 1;
    },
    decreaseQuantity: (state) => {
      if (state.quantity > 1) {
        state.quantity -= 1;
      }
    },
    toggleTopping: (state, action) => {
      const { topping, value } = action.payload;
      state.selectedToppings[topping] = value;
    },
  },
});

export const { setSelectedPizza, increaseQuantity, decreaseQuantity, toggleTopping } = orderSlice.actions;
export default orderSlice.reducer;
