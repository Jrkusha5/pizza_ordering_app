const { Pizza } = require('../models/Pizza.model.js');
const { Topping } = require('../models/Topping.model.js');
const { z } = require('zod');

// Add new pizza
const addPizza = async (req, res) => {
    const pizzaSchema = z.object({
        name: z.string().min(3, "Pizza name must be at least 3 characters long"),
        restaurantId: z.number().positive("Invalid restaurant ID")
    });

    try {
        const pizzaData = pizzaSchema.parse(req.body);
        const newPizza = await Pizza.create(pizzaData);
        res.status(201).json(newPizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all pizzas for a restaurant
const getPizzasByRestaurant = async (req, res) => {
    try {
        const pizzas = await Pizza.findAll({ where: { restaurantId: req.params.restaurantId } });
        res.json(pizzas);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching pizzas' });
    }
};

// Add toppings to a pizza
const addToppingsToPizza = async (req, res) => {
    const toppingsSchema = z.object({
        pizzaId: z.number(),
        toppings: z.array(z.number()) // Array of topping IDs
    });

    try {
        const { pizzaId, toppings } = toppingsSchema.parse(req.body);
        const pizza = await Pizza.findByPk(pizzaId);

        if (!pizza) {
            return res.status(404).json({ error: 'Pizza not found' });
        }

        const toppingInstances = await Topping.findAll({
            where: { id: toppings, restaurantId: pizza.restaurantId }
        });

        if (toppingInstances.length !== toppings.length) {
            return res.status(400).json({ error: 'Some toppings are invalid for this pizza' });
        }

        // Add the toppings to the pizza
        pizza.toppings = toppings;
        await pizza.save();
        res.json(pizza);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Export the controller functions
module.exports = {
    addPizza,
    getPizzasByRestaurant,
    addToppingsToPizza
};
