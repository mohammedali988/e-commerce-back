const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./app/models");
const routes = require("./app/controller");

const corsOptions = {
  origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

//  parse request of content type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/", routes);

module.exports = app;
