const mongoose = require("mongoose");
const marksSchema = new mongoose.Schema({
   exam: { type: mongoose.Schema.Types.ObjectId, ref: "Exam", required: true },
   student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
   marks: { type: Number, required: true },
});
const Marks = mongoose.model("Marks", marksSchema);

module.exports = Marks;
