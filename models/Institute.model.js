const mongoose = require("mongoose");

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
});

const Institute = mongoose.model("Institute", instituteSchema);

module.exports = Institute;
