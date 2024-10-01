import { configureStore } from '@reduxjs/toolkit';
import pizzaReducer from './pizzaSlice';
import orderReducer from './orderSlice';

const store = configureStore({
  reducer: {
    pizza: pizzaReducer,
    order: orderReducer,
  },
});

export default store;
