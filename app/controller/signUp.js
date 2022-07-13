const db = require("../models");
const User = db.users;
const bcrypt = require("bcryptjs");

const signUp = async (req, res) => {
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
      res.status(200).send({
        message: "Created successfully!",
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

module.exports = signUp;
