const db = require("../../models");
const User = db.users;
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../../config/auth.config");
const { createToken } = require("../../middleware/createToken");
const { maxAge } = require("../../middleware/createToken");

const signUp = (req, res) => {
  const { name, lastName, password, email, isAdmin, dateOfBirth } = req.body;
  const salt = bcrypt.genSaltSync();
  const hashPass = bcrypt.hashSync(password, salt);

  User.create({
    name,
    lastName,
    password: hashPass,
    email,
    isAdmin,
    dateOfBirth,
  })
    .then((result) => {
      const user = result.dataValues;

      const token = createToken(user.id);
      res.cookie("jwt", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      });
      res.status(200).json({ user: user.id });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

module.exports = signUp;
