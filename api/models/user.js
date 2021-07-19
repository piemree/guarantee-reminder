const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, default: "ayhan", unique: true },
  password: { type: String, default: "ayhan123" },
});

module.exports = mongoose.model("User", UserSchema);
