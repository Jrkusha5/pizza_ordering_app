'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topping = sequelize.define('Topping', {
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

  Topping.associate = function(models) {
    // Define association with Restaurant
    Topping.belongsTo(models.Restaurant, {
      foreignKey: 'restaurant_id',
      as: 'restaurant',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // Define many-to-many relationship with Pizza through PizzaTopping
    Topping.belongsToMany(models.Pizza, {
      through: models.PizzaTopping, // Join table
      foreignKey: 'topping_id',
      otherKey: 'pizza_id'
    });
  };

  return Topping;
};
