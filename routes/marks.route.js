const express = require('express')
const router=express.Router();

const { createMarks,
    getMarksbyID,
    updateMarks,
    deleteMarks}=require('../controller/marksController')


router.post('/',createMarks);

router.get('/:id/:studentid',getMarksbyID);

router.put('/:id/:studentid',updateMarks);

router.delete('/:id/:studentid',deleteMarks);

module.exports=router;

