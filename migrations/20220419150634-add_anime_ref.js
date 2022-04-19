'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.addColumn('animes', 'animeRefId', {
      type: Sequelize.DataTypes.INTEGER
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.removeColumn('animes', 'animeRefId')
  }
};
