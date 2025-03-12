'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Socks}) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Socks, { foreignKey: 'sockId' });
    }
  }
  Favorites.init({
    userId: DataTypes.INTEGER,
    sockId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Favorites',
  });
  return Favorites;
};