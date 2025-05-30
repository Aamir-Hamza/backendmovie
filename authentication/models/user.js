const { default: mongoose } = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true, lowercase: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model("users", userSchema);