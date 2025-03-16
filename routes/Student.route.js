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

const { protect, admin }=require('../middleware/AuthMiddleware')


router.post("/register", createStudent);
router.get("/", protect,getStudents);
router.get("/:id",protect, getStudentById);
router.put("/:id",protect, updateStudent);
router.delete("/:id",protect,admin, deleteStudent);

router.post("/login", loginStudent);

router.post("/google-login", googleLoginStudent);

router.post("/forget-password", forgetPasswordStudent);

router.post("/reset-password/:token", resetPasswordStudent);

module.exports = router;