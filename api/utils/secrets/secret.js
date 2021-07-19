require("dotenv").config();

module.exports.port = process.env.PORT || 5000;
module.exports.connectionString =
  process.env.CONNECTION_STRING || "mongodb://localhost:27017/test";
module.exports.jwt_access_key = process.env.JWT_ACCESS_KEY;
