const router = require("express").Router();
const checkDuplicate = require("../middleware/verifySignUp");
const { addOrder } = require("./addOrders");
const logOut = require("./Auth/logOut");
const signIn = require("./Auth/signIn");
const signUp = require("./Auth/signUp");
const addProducts = require("./Products/addProducts");

///////////////////////////////////////////  Auth Routes
router.post("/api/auth/signUp", checkDuplicate, signUp);
router.post("/api/auth/signIn", signIn);
router.get("/api/auth/logOut", logOut);

////////////////////////////////////////// Products Routes

router.post("/products/add", addProducts);

router.post("/add/orders", addOrder);

router.get("/hi", (req, res) => {
  res.send("hii");
});

module.exports = router;
