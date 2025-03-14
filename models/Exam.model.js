const mongoose = require("mongoose");
const examSchema = new mongoose.Schema({
  name: { type: String, required: true },
  conducting_institute: { type: mongoose.Schema.Types.ObjectId, ref: "Institute", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  duration: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  description: { type: String, required: true },
});
const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;
