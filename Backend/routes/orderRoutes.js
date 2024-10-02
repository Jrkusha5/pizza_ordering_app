const express = require('express');
const { placeOrder, getOrdersByRestaurant, updateOrderStatus, getOrderById } = require('../controller/orderController');
const router = express.Router();


router.post('/', placeOrder);

router.get('/restaurant/:restaurantId', getOrdersByRestaurant);


router.patch('/:orderId', updateOrderStatus);

router.get('/:orderId', getOrderById);

router.get('/restaurant/:restaurantId', authorize('read', 'Order'), getOrdersByRestaurant);

module.exports = router;
