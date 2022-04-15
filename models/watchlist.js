'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class WatchList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {}
  }
  WatchList.init(
    {
      animeId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'animes',
          key: 'id'
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'WatchList',
      tableName: 'watchlists'
    }
  )
  return WatchList
}
