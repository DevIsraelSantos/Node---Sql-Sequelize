'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    return await queryInterface.createTable('user_techs', {

      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      //PK User
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'users', key: 'id'},
        onUpdate: 'CASCADE', //O que acantece caso o ID seja atualizado
        onDelete: 'CASCADE', //O que acontece caso o ID seja apagado
      },
      
      //PK Tech
      tech_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {model: 'techs', key: 'id'},
        onUpdate: 'CASCADE', //O que acantece caso o ID seja atualizado
        onDelete: 'CASCADE', //O que acontece caso o ID seja apagado
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
    return await queryInterface.dropTable('user_techs');
     
  }
};
