const Register = require('../models/Register.model');

function createRegister(req, res) {
    let { exam, students } = req.body;

    if(!students){
        students=[];
    }
    // students is an array 
    const newRegister = new Register({ exam, students });
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

function addStudent(req, res) {
    const { studentid } = req.body;
    Register.findByIdAndUpdate(
        req.params.id,
        { $push: { students: studentid } },
        { new: true }
    )
    .then(register => res.json(register))
    .catch(err => res.status(500).json({ error: err.message }));
}

function removeStudent(req, res) {
    const { studentid } = req.body;
    Register.findByIdAndUpdate(
        req.params.id,
        { $pull: { students: studentid } },
        { new: true }
    )
    .then(register => res.json(register))
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
    Register.findOne({ exam: req.params.examid })
        .populate('students')
        .then(register => {
            if (!register) return res.status(404).json({ message: 'No students found for this exam' });
            res.json(register.students);
        })
        .catch(err => res.status(500).json({ error: err.message }));
}

function getExamsByStudentId(req, res) {
    Register.find({ students: req.params.studentid })
        .populate('exam')
        .then(registers => {
            if (!registers.length) return res.status(404).json({ message: 'No exams found for this student' });
            const exams = registers.map(register => register.exam);
            res.json(exams);
        })
        .catch(err => res.status(500).json({ error: err.message }));
}

module.exports = {
    createRegister,
    getRegisterById,
    addStudent,
    removeStudent,
    deleteRegister,
    getStudentsByExamId,
    getExamsByStudentId
};
