const Register = require('../models/Register.model');

function createRegister(req, res) {
    let { examid, studentid } = req.body;

   
    
    const newRegister = new Register({ exam:examid, students:studentid });
    newRegister.save()
        .then(register => res.status(201).json(register))
        .catch(err => res.status(500).json({ error: err.message }));
}

function getRegisterById(req, res) {
    Register.findById(req.params.id)
        .populate('exam')
        .populate('students')
        .then(register => {
            if (!register) return res.status(404).json({ message: 'Register not found' });
            res.json(register);
        })
        .catch(err => res.status(500).json({ error: err.message }));
}



function deleteRegister(req, res) {
    Register.findByIdAndDelete(req.params.id)
        .then(register => {
            if (!register) return res.status(404).json({ message: 'Register not found' });
            res.json({ message: 'Register deleted successfully' });
        })
        .catch(err => res.status(500).json({ error: err.message }));
}

function getStudentsByExamId(req, res) {
    Register.find({ exam: req.params.examid })
        .populate('students')
        .then(registers => {
            if (!registers.length) return res.status(404).json({ message: 'No students found for this exam' });
            const students = registers.map(register => register.students);
            res.json(students);
        })
        .catch(err => res.status(500).json({ error: err.message }));
}

function getExamsByStudentId(req, res) {
    Register.find({ students: req.params.studentid })
        .populate('exam')
        .then(registers => {
            console.log(registers);
            if (!registers.length) return res.status(404).json({ message: 'No exams found for this student' });
            const exams = registers.map(register => register.exam);
            res.json(exams);
        })
        .catch(err => res.status(500).json({ error: err.message }));
}


function DeleteRegistrationByExamStudent(req, res) {
    Register.findOneAndDelete({ exam: req.params.examid, students: req.params.studentid })
        .then((result) => {
            if (result) {
                res.status(200).json({ message: 'Registration Deleted Successfully' });
            } else {
                res.status(404).json({ error: 'No matching registration found' });
            }
        })
        .catch(err => res.status(500).json({ error: err.message }));
}


module.exports = {
    createRegister,
    getRegisterById,
   
    deleteRegister,
    getStudentsByExamId,
    getExamsByStudentId,
    DeleteRegistrationByExamStudent
};
