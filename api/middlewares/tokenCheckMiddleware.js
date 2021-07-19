const jwt = require("jsonwebtoken");
const { jwt_access_key } = require("../utils/secrets/secret");

module.exports = async function (req, res, next) {
  if (!req.headers["authorization"])
    return res.status(403).send("Forbidden Request");

  const token = req.headers["authorization"].split(" ")[1];
  if (!token) return res.status(403).send("Forbidden Request");

  jwt.verify(token, jwt_access_key, function (err, decode) {
    if (err) return res.status(403).send("Forbidden Request");
    req.user = decode;

    next();
  });
};
