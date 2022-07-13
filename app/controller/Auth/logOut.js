const logOut = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.send("Log out!");
};

module.exports = logOut;
