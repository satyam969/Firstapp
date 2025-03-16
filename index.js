require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const StudentRoutes=require("./routes/Student.route")
const InstituteRoutes=require('./routes/Institute.route')
const ExamRoutes=require('./routes/Exam.route')
const MarksRoutes=require('./routes/marks.route')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/students', StudentRoutes);

app.use('/api/institutes', InstituteRoutes);

app.use('/api/exams', ExamRoutes);

app.use('/api/marks', MarksRoutes);

const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000; 

async function connectToDb() {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB Connection Error:", err);
    });
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error);
    process.exit(1); 
  }
}

connectToDb();

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
