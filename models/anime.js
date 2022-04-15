'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anime.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    season: DataTypes.INTEGER,
    episodes: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    genre: DataTypes.STRING,
    playlistId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};