'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name:{
      type :Sequelize.STRING,
    },
    email:{
      type :Sequelize.STRING,
    },
    password:{
      type :Sequelize.STRING,
    },
    firstname:{
      type :Sequelize.STRING,
    },
    surname:{
      type :Sequelize.STRING,
    },
    mobileNumber:{
      type :Sequelize.INTEGER,
    },
    otp:{
      type :Sequelize.INTEGER,
    },
    DOB:{
      type :Sequelize.DATE,
    },
    refferal_code:{
      type :Sequelize.STRING,
    },
    kiosk_id:{
      type :Sequelize.STRING,
    },
    specail_Date:{
      type :Sequelize.DATE,
    },
    token:{
      type :Sequelize.STRING,
    
     
  },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};