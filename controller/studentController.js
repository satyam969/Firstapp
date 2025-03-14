const Student = require('../models/Student.model');
const sendEmail = require('../utils/sendEmail');
const jwt=require('jsonwebtoken')

const createStudent = async (req, res) => {
    try {
        const newStudent = new Student(req.body);
        await newStudent.save();
        res.status(201).json(newStudent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStudents = async (req, res) => {
    try {
        const students = await Student.find().select('-password');
        res.json(students);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).select('-password');
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json(student);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id).select('-password');
        console.log("phuch gya yaha ");
        if (!student) return res.status(404).json({ message: 'Student not found' });
        res.json({ message: 'Student deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginStudent = async (req, res) => {
    try {
        const student = await Student.findOne({ mail: req.body.mail });
        if (!student || !(await student.comparePassword(req.body.password)))
            return res.status(400).json({ message: 'Invalid email or password' });
        res.json({ message: 'Login successful', token: await student.generateToken() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const googleLoginStudent = async (req, res) => {
    try {
        const student = await Student.findOne({ oauthId: req.body.oauthId });
        if (student) return res.json({ message: 'Login successful', token: await student.generateToken() });
        const newStudent = new Student({ oauthId: req.body.oauthId });
        await newStudent.save();
        res.json({ message: 'Login successful', token: await newStudent.generateToken() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const forgetPasswordStudent = async (req, res) => {
    try {   
        const student = await Student.findOne({ mail: req.body.mail });
        if (!student) return res.status(404).json({ message: 'No account found with that email' });

        const resetToken = student.generateResetToken();

        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
        await sendEmail(student.mail, 'Password Reset', `Click on this link to reset your password: ${resetUrl}`);

        res.json({ message: 'Reset password link sent to your email' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const resetPasswordStudent = async (req, res) => {
    
    
    try {
        const { token } = req.params;
        const { password } = req.body;

        if (!token ||!password) {
            return res.status(400).json({ message: 'Token and password are required' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);



        const student = await Student.findOne({ _id: decoded.id });




        if (!student) {
            return res.status(400).json({ message: 'Invalid or expired reset token' });
        }

        student.password = password;
        student.resetToken = undefined;
        await student.save();

        res.json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Invalid or expired reset token' });
    }
};


module.exports = {
    createStudent,
    getStudents,
    getStudentById,
    updateStudent,
    deleteStudent,
    loginStudent,
    googleLoginStudent,
    forgetPasswordStudent,
    resetPasswordStudent
};