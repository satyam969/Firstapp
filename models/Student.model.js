const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  mail: { type: String, required: true, unique: true },
  password: { type: String, required: true }, 
  phone: { type: String, required: true },
  dob: { type: Date, required: true },
  gender: { type: String, required: true },
  institute: { type: mongoose.Schema.Types.ObjectId, ref: "Institute", required: true },
  approved: { type: Boolean, default: false },

  oauthId: { type: String, unique: true, sparse: true },
}, { timestamps: true });

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
