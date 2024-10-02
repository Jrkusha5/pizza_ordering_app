const { Order } = require('../db/models/order.js')
const { Pizza } = require('../db/models/pizza.js');
const { Topping } = require('../db/models/topping.js'); 
const { errorHandler } = require('../utils/errorHandler.js');
const { z } = require('zod');
const { subject } = require('@casl/ability');

// Place an order
const placeOrder = async (req, res, next) => {
    const orderSchema = z.object({
        customerId: z.number(),
        pizzaId: z.number(),
        toppings: z.array(z.number()).optional(),
        totalPrice: z.number().positive()
    });

    try {
        const orderData = orderSchema.parse(req.body);
        const pizza = await Pizza.findByPk(orderData.pizzaId);

        if (!pizza) {
            return next(new errorHandler('Pizza not found', 404));
        }

        // Ensure toppings belong to the same restaurant as the pizza
        const validToppings = await Topping.findAll({
            where: { restaurantId: pizza.restaurantId, id: orderData.toppings }
        });

        if (validToppings.length !== (orderData.toppings?.length || 0)) {
            return next(new errorHandler('Invalid toppings for this pizza', 400));
        }

        // Create the order
        const newOrder = await Order.create({
            ...orderData,
            restaurantId: pizza.restaurantId, // Associate the order with the restaurant
            status: 'pending' // Initial order status
        });

        res.status(201).json(newOrder);
    } catch (error) {
        next(new errorHandler(error.message, 400));
    }
};


const getOrdersByRestaurant = async (req, res, next) => {
    try {
        const restaurantId = req.params.restaurantId;

    
        if (req.ability.cannot('read', subject('Order', { restaurantId }))) {
            return next(new errorHandler('You are not authorized to view these orders', 403));
        }

        const orders = await Order.findAll({ where: { restaurantId } });
        res.json(orders);
    } catch (error) {
        next(new errorHandler('Error fetching orders', 500));
    }
};

// Update order status
const updateOrderStatus = async (req, res, next) => {
    const statusSchema = z.object({
        status: z.enum(['pending', 'preparing', 'ready', 'delivered'])
    });

    try {
        const { orderId } = req.params;
        const { status } = statusSchema.parse(req.body);

        const order = await Order.findByPk(orderId);

        if (!order) {
            return next(new errorHandler('Order not found', 404));
        }

        // Check permissions with CASL before updating status
        if (req.ability.cannot('update', subject('Order', { restaurantId: order.restaurantId }))) {
            return next(new errorHandler('You are not authorized to update this order', 403));
        }

        // Update the status of the order
        order.status = status;
        await order.save();

        res.json(order);
    } catch (error) {
        next(new errorHandler(error.message, 400));
    }
};

// Get order details by ID (for customers or authorized users)
const getOrderById = async (req, res, next) => {
    try {
        const { orderId } = req.params;

        const order = await Order.findByPk(orderId);

        if (!order) {
            return next(new errorHandler('Order not found', 404));
        }

        // Check permissions with CASL for viewing the order details
        if (req.ability.cannot('read', subject('Order', { customerId: order.customerId }))) {
            return next(new errorHandler('You are not authorized to view this order', 403));
        }

        res.json(order);
    } catch (error) {
        next(new errorHandler('Error fetching order details', 500));
    }
};

// Export the controller functions
module.exports = {
    placeOrder,
    getOrdersByRestaurant,
    updateOrderStatus,
    getOrderById
};
