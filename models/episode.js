'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Episode extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Episode.belongsToMany(models.Anime, { foreignKey: 'animeId' })
    }
  }
  Episode.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      lengh: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      animeId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'anime',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Episode',
      tableName: 'episodes'
    }
  )
  return Episode
}
