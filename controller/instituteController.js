const Institute=require('../models/Institute.model')
const sendEmail = require('../utils/sendEmail');
const jwt=require('jsonwebtoken');

const CreateInstitute = async (req, res) => {
    try {
        const newInstitute = new Institute(req.body);
        await newInstitute.save();
        res.status(201).json(newInstitute);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const GetInstitutes = async (req, res) => {
    try {
        const institutes = await Institute.find().select('-password');
        res.json(institutes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const   GetInstituteById = async (req, res) => {
    try {
        const institute = await Institute.findById(req.params.id).select('-password');
        console.log(institute.resetToken)
        if (!institute) return res.status(404).json({ message: 'Institute not found' });
        res.json(institute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const UpdateInstitute = async (req, res) => {
    try {
        const institute = await Institute.findByIdAndUpdate(req.params.id, req.body, { new: true }).select('-password');
        if (!institute) return res.status(404).json({ message: 'Institute not found' });
        res.json(institute);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const DeleteInstitute = async (req, res) => {
    try {
        const institute = await Institute.findByIdAndDelete(req.params.id);
        if (!institute) return res.status(404).json({ message: 'Institute not found' });
        res.json({ message: 'Institute deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const LoginInstitute = async (req, res) => {
    try {
        const institute = await Institute.findOne({ mail: req.body.mail });
        if (!institute || !(await institute.comparePassword(req.body.password)))
            return res.status(400).json({ message: 'Invalid email or password' });
        res.json({ message: 'Login successful', token: await institute.generateToken() });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const forgetPasswordInstitute = async (req, res) => {
    try {   
        const institute = await Institute.findOne({ mail: req.body.mail });
        if (!institute) return res.status(404).json({ message: 'No Institute found with that email' });

        const resetToken = institute.generateResetToken();

        const resetUrl = `http://localhost:3000/reset-password/${resetToken}`;
        await sendEmail(institute.mail, 'Password Reset', `Click on this link to reset your password: ${resetUrl}`);

        res.json({ message: 'Reset password link sent to your email' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const resetPasswordInstitute = async (req, res) => {
    
    
    try {
        const { token } = req.params;
        const { password } = req.body;
        

        if (!token ||!password) {
            return res.status(400).json({ message: 'Token and password are required' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        const institute = await Institute.findOne({ _id: decoded.id });


        if (!institute) {
            return res.status(400).json({ message: 'Invalid or expired reset token' });
        }

        institute.password = password;
        institute.resetToken = undefined;
        await institute.save();


        res.json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Invalid or expired reset token' });
    }
};


module.exports={CreateInstitute,UpdateInstitute,DeleteInstitute,forgetPasswordInstitute,resetPasswordInstitute,DeleteInstitute,UpdateInstitute,GetInstitutes,LoginInstitute,GetInstituteById}