const express = require('express')

const router=express.Router();

const {   createExam,
    getExams,
    getExamById,
    getExamsByInstitute,
    updateExam,
    deleteExam}=require('../controller/examController');
const { protect, admin } = require('../middleware/AuthMiddleware');

    router.post('/',admin,protect, createExam)
    router.get('/',protect, getExams)
    router.get('/:id',protect, getExamById)
    router.get('/institute/:id',protect, getExamsByInstitute)
    router.put('/:id',protect, updateExam)
    router.delete('/:id', protect,deleteExam)

    module.exports=router;