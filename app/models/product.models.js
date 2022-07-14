module.exports = (sequelize, Sequelize) => {
  const Products = sequelize.define("products", {
    name: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.STRING,
    },
    brand: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    // img: {
    //   type: Sequelize.BLOB("long"),
    // },
  });

  return Products;
};
