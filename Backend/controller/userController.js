const { User } = require('../models/user.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { z } = require('zod');

// Register a new user
const registerUser = async (req, res) => {
    const userSchema = z.object({
        username: z.string().min(3, "Username must be at least 3 characters long"),
        email: z.string().email("Invalid email address"),
        password: z.string().min(6, "Password must be at least 6 characters long"),
        role: z.enum(['customer', 'manager', 'super_admin']),
        restaurantId: z.number().optional()
    });

    try {
        const userData = userSchema.parse(req.body);  // Validate incoming data
        const hashedPassword = await bcrypt.hash(userData.password, 10); // Hash password
        const newUser = await User.create({ ...userData, password: hashedPassword });
        res.status(201).json(newUser); // Send the newly created user as response
    } catch (error) {
        res.status(400).json({ error: error.message }); // Send validation error
    }
};

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ where: { email } });

        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }

        // Securely get JWT secret from environment variables
        const token = jwt.sign(
            { id: user.id, role: user.role }, 
            process.env.JWT_SECRET || 'default_secret_key',  // Use environment variable for JWT secret
            { expiresIn: '1h' }
        );
        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Login failed' });
    }
};

// Fetch user details
const getUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.userId); // Fetch user by primary key
        if (user) {
            res.json(user); // Return user data if found
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching user details' });
    }
};

// Export the controller functions
module.exports = {
    registerUser,
    loginUser,
    getUser,
};
