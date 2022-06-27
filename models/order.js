'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsTo(models.Users, { foreignKey: 'id_tukang', as: 'tukang' })
      Order.belongsTo(models.Users, { foreignKey: 'id_users', as: 'pemesan' })
    }
  }
  Order.init({
    id_tukang: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER,
    payment: DataTypes.STRING,
    service_category: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.STRING,
    address: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};