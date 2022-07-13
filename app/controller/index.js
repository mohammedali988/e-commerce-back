const router = require("express").Router();
const { addOrder } = require("./addOrders");
const { addUser } = require("./addUser");

router.post("/add/user", addUser);
router.post("/add/orders", addOrder);

router.get("/hi", (req, res) => {
  res.send("hii");
});

module.exports = router;
