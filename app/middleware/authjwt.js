const db = require("../models");
const User = db.users;
const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

verifyToken = (req, res, next) => {
  let token = req.session.token;

  if (!token) {
    return res.status(403).send({
      message: "no token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }
    req.userId = decoded.id;
    next();
  });
};

isAdmin = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        id: req.userId,
      },
    });
    if (user.isAdmin) {
      return next();
    } else
      return res.status(403).send({
        message: "You are not admin!",
      });
  } catch (err) {
    return res.status(500).send({
      message: "Unable to validate the role!",
    });
  }
};

const authJWT = {
  verifyToken,
  isAdmin,
};

module.exports = authJWT;
