module.exports = (sequelize, Sequelize) => {
  const WishList = sequelize.define("wishlist", {});

  return WishList;
};
