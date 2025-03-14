const express = require('express')
const router=express.Router();


const{Addmarks,updatemarksById} =require('../controllers/marksController')

router.put('/:exam_id/:student_id', updatemarksById)

router.post('/', Addmarks)

module.exports=router;

