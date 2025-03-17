const express = require('express')

const router=express.Router();

const {   createExam,
    getExams,
    getExamById,
    getExamsByInstitute,
    updateExam,
    deleteExam}=require('../controller/examController');
const { protect, admin, protectStudent } = require('../middleware/AuthMiddleware');

    router.post('/',protect,admin, createExam)
    router.get('/',protectStudent, getExams)
    router.get('/:id',protectStudent, getExamById)
    router.get('/institute/:id',protectStudent, getExamsByInstitute)
    router.put('/:id',protect,admin, updateExam)
    router.delete('/:id',protect,admin,deleteExam)

    module.exports=router;