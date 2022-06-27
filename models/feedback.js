'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feedback extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Feedback.belongsTo(models.Users, { foreignKey: 'id_tukang', as: 'tukang' })
      Feedback.belongsTo(models.Users, { foreignKey: 'id_users', as: 'pemesan' })
    }
  }
  Feedback.init({
    review: DataTypes.STRING,
    id_tukang: DataTypes.INTEGER,
    id_users: DataTypes.INTEGER,
    star: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Feedback',
  });
  return Feedback;
};