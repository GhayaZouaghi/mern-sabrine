// require mongoose
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  phone: Number,

  role: {
    type: String,
    default: "Basic",
    required: true,
  },

  
});

module.exports = User = model("user", userSchema);
