const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.models")(sequelize, Sequelize);
db.products = require("./product.models")(sequelize, Sequelize);
db.categories = require("./categories.models")(sequelize, Sequelize);
db.wishList = require("./wishList.models")(sequelize, Sequelize);
db.orders = require("./orders.models")(sequelize, Sequelize);

db.users.hasMany(db.orders, {
  as: "orders",
});
db.orders.belongsTo(db.users, {
  as: "user",
  foreignKey: "userId",
});

db.orders.hasMany(db.products);
db.products.belongsTo(db.orders);

db.users.hasMany(db.wishList);
db.wishList.belongsTo(db.users);

db.wishList.hasMany(db.products);
db.products.belongsTo(db.wishList);

module.exports = db;
