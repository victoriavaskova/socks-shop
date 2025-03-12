'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Socks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Favorites, Cart}) {
      this.hasMany(Favorites, { foreignKey: 'sockId' });
      this.hasMany(Cart, { foreignKey: 'sockId' });    
    }
  }
  Socks.init({
    color: DataTypes.STRING,
    pattern: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Socks',
  });
  return Socks;
};