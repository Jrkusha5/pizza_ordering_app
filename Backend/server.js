// import express from 'express';
// import { sequelize } from './models/index.js'; // Sequelize models
// import { globalErrorHandler } from './middlewares/globalErrorHandler.js'; // Global error handler
// import { authRoutes } from './routes/authRoutes.js';
// import { orderRoutes } from './routes/orderRoutes.js';

// const app = express();

// app.use(express.json()); // Body parser

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/orders', orderRoutes);
// app.use('/api/userrs', userRoutes);
// app.use('/api/restaurants', restaurantRoutes);
// // Global error handler - placed after routes to catch errors
// app.use(globalErrorHandler);

// // Starting the server and syncing DB
// const startServer = async () => {
//     try {
//         await sequelize.sync({ force: true }); // Sync models with DB
//         app.listen(5000, () => {
//             console.log('Server started on port 5000');
//         });
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// };

// startServer();

// const {Client}=require('pg')

// const con=new Client({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'Mesi&7694',
//     port: 5432,
//     database:'pizza_db'
// })

// con.connect().then(()=>console.log("connected"))

require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require('express');
const { authorize } = require('../middlewares/authorize');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const pizzaRoutes = require('./routes/pizzaRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const toppingRoutes = require('./routes/toppingRoutes');



const app = express();

app.use(express.json());

app.use(
    '*', (req, res, next) => {
        res.status(404),json({
          status:'fail',
          message:'route not found'
        })
    })
;

app.use('/users', userRoutes);
app.use('/orders', orderRoutes);
app.use('/pizzas', pizzaRoutes);
app.use('/restaurants', restaurantRoutes);
app.use('/toppings', toppingRoutes);



const PORT = process.env.APP_PORT || 4000;

app.listen(PORT, () => {
    console.log('Server up and running', PORT);
});
