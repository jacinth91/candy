'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name:{
      type :DataTypes.STRING,
    },
    email:{
      type :DataTypes.STRING,
    },
    password:{
      type :DataTypes.STRING,
    },
    firstname:{
      type :DataTypes.STRING,
    },
    surname:{
      type :DataTypes.STRING,
    },
    mobileNumber:{
      type :DataTypes.INTEGER,
    },
    otp:{
      type :DataTypes.INTEGER,
    },
    DOB:{
      type :DataTypes.DATE,
    },
    refferal_code:{
      type :DataTypes.STRING,
    },
    kiosk_id:{
      type :DataTypes.STRING,
    },
    specail_Date:{
      type :DataTypes,
    },
    token:{
      type :DataTypes.STRING,
    },
     
  }, {});
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};