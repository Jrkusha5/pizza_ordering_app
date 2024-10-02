const express = require('express');
const { addPizza, getPizzasByRestaurant, addToppingsToPizza } = require('../controller/pizzaController');
const router = express.Router();


router.post('/', addPizza);


router.get('/restaurant/:restaurantId', getPizzasByRestaurant);


router.post('/toppings', addToppingsToPizza);

module.exports = router;
