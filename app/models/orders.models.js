module.exports = (sequelize, Sequelize) => {
  const Orders = sequelize.define("orders", {
    date: {
      type: Sequelize.DATE,
    },

  });

  return Orders;
};

