const db = require("../models");
const Users = db.users;

exports.addUser = (req, res) => {
  const { name, lastName, email, password, dateOfBirth, isAdmin } = req.body;

  Users.create({
    name,
    lastName,
    email,
    password,
    dateOfBirth,
    isAdmin,
  })
    .then((result) => {
      res.send("result" + result);
    })
    .catch((err) => {
      console.log("err happend in adding user: " + err);
    });
};
