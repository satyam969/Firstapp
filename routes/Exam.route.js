const express = require('express')

const router=express.Router();

const {   createExam,
    getExams,
    getExamById,
    getExamsByInstitute,
    updateExam,
    deleteExam}=require('../controller/examController')

    router.post('/', createExam)
    router.get('/', getExams)
    router.get('/:id', getExamById)
    router.get('/institute/:id', getExamsByInstitute)
    router.put('/:id', updateExam)
    router.delete('/:id', deleteExam)

    module.exports=router;