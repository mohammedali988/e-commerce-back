const db = require("../models");
const User = db.users;

const checkDuplicate = async (req, res, next) => {
  const { name, email } = req.body;

  try {
    const userName = await User.findOne({
      where: {
        name: name,
      },
    });

    if (userName) {
      return res.status(400).send({
        message: "User already exist",
      });
    }

    const userEmail = await User.findOne({
      where: {
        email: email,
      },
    });

    if (userEmail) {
      return res.status(400).send({
        message: " email already exist",
      });
    }

    next();
  } catch (err) {
    return res.status(500).send({
      message: "Unable to validate user!",
    });
  }
};

module.exports = checkDuplicate;
