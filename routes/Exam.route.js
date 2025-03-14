const express = require('express')

const router=express.Router();


const{CreateExam, DeleteExam,UpdateExam} =require(  '../controllers/examController');

router.post('/create', CreateExam);

router.delete('/delete/:id', DeleteExam);

router.put('/update/:id', UpdateExam);

module.exports = router;