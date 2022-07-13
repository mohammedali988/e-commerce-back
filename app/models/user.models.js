const db = require("./index");
module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define("users", {
    name: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    dateOfBirth: {
      type: Sequelize.DATE,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    isAdmin: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Users;
};
