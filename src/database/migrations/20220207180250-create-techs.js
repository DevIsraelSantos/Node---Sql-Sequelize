'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.createTable('techs', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }, 
    
    
    });




  },

  async down(queryInterface, Sequelize) {
    return await queryInterface.dropTable('techs');
     
  }
};