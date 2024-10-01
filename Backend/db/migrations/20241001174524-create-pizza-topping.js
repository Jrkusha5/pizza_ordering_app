'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PizzaToppings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pizza_id: {
        type: Sequelize.INTEGER
      },
      topping_id: {
        type: Sequelize.INTEGER
      },
      created_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
    await queryInterface.addConstraint('PizzaToppings', {
      fields: ['pizza_id', 'topping_id'],
      type: 'primary key',
      name: 'pk_pizza_toppings'  // Name of the primary key constraint
    });
  },
  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.removeConstraint('PizzaToppings', 'pk_pizza_toppings');
    await queryInterface.dropTable('PizzaToppings');
  }
};