
//public auth controllers

const jwt = require("jsonwebtoken");
const { jwt_access_key } = require("../utils/secrets/secret");

const login = async function (req, res, next) {
  const token = jwt.sign(req.user, jwt_access_key, { expiresIn: "1d" });

  res.send({ token: token });
};

module.exports = {
  login,
};
