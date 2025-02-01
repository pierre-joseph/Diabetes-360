const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String, 
  age: Number,
  bloodSugar: Number,
  height: Number,
  weight: Number
});

const User = mongoose.model("User", UserSchema);
module.exports = User;