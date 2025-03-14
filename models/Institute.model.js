const mongoose = require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require('jsonwebtoken')

const instituteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  resetToken: { type: String },  
  resetTokenExpiry: { type: Date },
  address: { type: String, required: true },
});


instituteSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})


instituteSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, mail: this.mail }, process.env.JWT_SECRET, { expiresIn: '10d' })
}

instituteSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

instituteSchema.methods.generateResetToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '20m' })
}


const Institute = mongoose.model("Institute", instituteSchema);

module.exports = Institute;
