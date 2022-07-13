const router = require("express").Router();
const checkDuplicate = require("../middleware/verifySignUp");
const { addOrder } = require("./addOrders");
const logOut = require("./Auth/logOut");
const signIn = require("./Auth/signIn");
const signUp = require("./Auth/signUp");

router.post("/api/auth/signUp", checkDuplicate, signUp);
router.post("/api/auth/signIn", signIn);
router.get("/api/auth/logOut", logOut);

router.post("/add/orders", addOrder);

router.get("/hi", (req, res) => {
  res.send("hii");
});

module.exports = router;
