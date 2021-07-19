const mongoose = require("mongoose");
const winston = require("winston");

mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

/**
 *
 * @param {String} connectionString
 */

module.exports.startDb = async function (connectionString) {
  try {
    await mongoose.connect(connectionString);
    winston.info("Database connection started");
  } catch (error) {
    winston.error("Database connection failed");
    winston.error(error);
  }
};
