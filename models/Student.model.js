const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");
const bcrypt=require('bcrypt');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: "Institute", required: true },
  approved: { type: Boolean, default: false },
  resetToken: { type: String },  
  resetTokenExpiry: { type: Date },
  oauthId: { type: String, unique: true, sparse: true },
}, { timestamps: true });

studentSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 10)
  next()
})


studentSchema.methods.generateToken = function () {
  return jwt.sign({ id: this._id, mail: this.mail }, process.env.JWT_SECRET, { expiresIn: '10d' })
}

studentSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

studentSchema.methods.generateResetToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '20m' })
}

const Student = mongoose.model("Student", studentSchema);



module.exports = Student;
