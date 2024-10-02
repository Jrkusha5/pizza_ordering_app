const express = require('express');
const { registerRestaurant, getAllRestaurants } = require('../controller/restaurantController');
const router = express.Router();

// Register a new restaurant
router.post('/', registerRestaurant);

// Get all restaurants
router.get('/', getAllRestaurants);

module.exports = router;
