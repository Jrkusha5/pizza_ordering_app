const express = require('express');
const { addTopping, getToppingsByRestaurant } = require('../controller/toppingController');
const router = express.Router();


router.post('/', addTopping);

router.get('/restaurant/:restaurantId', getToppingsByRestaurant);

module.exports = router;
