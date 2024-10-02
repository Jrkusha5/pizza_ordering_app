const express = require('express');
const { registerUser, loginUser, getUser } = require('../controller/userController');
const router = express.Router();

// Register a new user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user details by ID
router.get('/:userId', getUser);

module.exports = router;
