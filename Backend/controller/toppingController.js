const { Topping } = require('../db/models/topping.js');
const { z } = require('zod');

// Add a new topping to a restaurant
const addTopping = async (req, res) => {
    const toppingSchema = z.object({
        name: z.string().min(2, "Topping name must be at least 2 characters long"),
        restaurantId: z.number().positive("Invalid restaurant ID")
    });

    try {
        const toppingData = toppingSchema.parse(req.body);
        const newTopping = await Topping.create(toppingData);
        res.status(201).json(newTopping);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all toppings for a restaurant
const getToppingsByRestaurant = async (req, res) => {
    try {
        const toppings = await Topping.findAll({
            where: { restaurantId: req.params.restaurantId }
        });
        res.json(toppings);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching toppings' });
    }
};

// Export the controller functions
module.exports = {
    addTopping,
    getToppingsByRestaurant
};
