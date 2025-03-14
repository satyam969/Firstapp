const express = require('express')
const router=express.Router();



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
} = require("../controller/studentController");




router.post("/register", createStudent);
router.get("/", getStudents);
router.get("/:id", getStudentById);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

router.post("/login", loginStudent);

router.post("/google-login", googleLoginStudent);

router.post("/forget-password", forgetPasswordStudent);

router.post("/reset-password/:token", resetPasswordStudent);

module.exports = router;