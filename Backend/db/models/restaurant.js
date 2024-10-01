'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    restaurant_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    logo: DataTypes.STRING,
    owner_id: DataTypes.INTEGER,
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  }, {});

  Restaurant.associate = function(models) {
    // associations can be defined here
    Restaurant.belongsTo(models.User, { foreignKey: 'owner_id', as: 'owner', onDelete: 'SET NULL', onUpdate: 'CASCADE' });
  };

  return Restaurant;
};
