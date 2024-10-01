'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pizza = sequelize.define('Pizza', {
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    restaurant_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {});

  Pizza.associate = function(models) {
    // Define association with Restaurant
    Pizza.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // Define many-to-many relationship with Toppings through PizzaTopping
    Pizza.belongsToMany(models.Topping, {
      through: models.PizzaTopping, // Join table
      foreignKey: 'pizza_id',
      otherKey: 'topping_id'
    });
  };

  return Pizza;
};
