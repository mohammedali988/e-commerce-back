const db = require("../models");
const orders = db.orders;

exports.addOrder = (req, res) => {
  const { date } = req.body;

  orders
    .create({
      date,
    })
    .then((result) => {
      console.log("user add");
      res.send("done");
    })
    .catch((err) => {
      console.log("err happend in adding user: " + err);
    });
};
