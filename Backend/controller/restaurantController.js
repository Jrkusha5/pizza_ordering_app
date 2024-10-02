const { Restaurant } = require('../db/models/Restaurant.model.js');
const { User } = require('../db/models/user.js');
const { z } = require('zod');

// Register a new restaurant
const registerRestaurant = async (req, res) => {
    const restaurantSchema = z.object({
        name: z.string().min(3, "Restaurant name must be at least 3 characters long"),
        superAdminId: z.number().positive("Invalid super admin ID")
    });

    try {
        const restaurantData = restaurantSchema.parse(req.body);
        const superAdmin = await User.findByPk(restaurantData.superAdminId);

        if (!superAdmin || superAdmin.role !== 'super_admin') {
            return res.status(400).json({ error: 'Invalid super admin ID' });
        }

        const newRestaurant = await Restaurant.create(restaurantData);
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching restaurants' });
    }
};

// Export the controller functions
module.exports = {
    registerRestaurant,
    getAllRestaurants
};
