const jwt = require("jsonwebtoken");
const config = require('../config/auth.config')

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return (token = jwt.sign({ id }, config.secret, {
    expiresIn: maxAge,
  }));
};

module.exports = {
    maxAge,
  createToken,
};
