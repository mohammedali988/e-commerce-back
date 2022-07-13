const db = require("../../models");
const User = db.users;
const bcrypt = require("bcryptjs");
const { createToken } = require("../../middleware/createToken");
const { maxAge } = require("../../middleware/createToken");

const signIn = async (req, res) => {
  const { email, password } = req.body;
  console.log(email, "hereeeeeeeeeeeeeeeeeeee");

  const result = await User.findOne({
    where: {
      email: email,
    },
  });

  console.log(result.dataValues, "here is the user ");
  if (!result) {
    res.status(404).send({
      message: "User not found!",
    });
  }

  const checkPass = bcrypt.compare(password, result.dataValues.password);

  if (checkPass) {
    const user = result.dataValues;

    const token = createToken(user.id);
    res.cookie("jwt", token, {
      httpOnly: true,
      maxAge: maxAge * 1000,
    });
    res.status(201).json({ user: user.id });
  }
};

module.exports = signIn;
