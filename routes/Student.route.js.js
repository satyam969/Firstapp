const router=express.Router();

// Importing controllers

const {
  createStudent,
  getStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
  loginStudent,
  googleLoginStudent,
  forgetPasswordStudent,
  resetPasswordStudent,
} = require("../controllers/studentController");


// Routes

router.post("/register", createStudent);
router.get("/students", getStudents);
router.get("/students/:id", getStudentById);
router.put("/students/:id", updateStudent);
router.delete("/students/:id", deleteStudent);

router.post("/login", loginStudent);

router.post("/google-login", googleLoginStudent);

router.post("/forget-password", forgetPasswordStudent);

router.post("/reset-password/:token", resetPasswordStudent);

module.exports = router;