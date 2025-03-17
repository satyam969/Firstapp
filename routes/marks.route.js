const express = require('express')
const router=express.Router();

const { createMarks,
    getMarksbyID,
    updateMarks,
    deleteMarks}=require('../controller/marksController');
const { protect, admin, protectStudent } = require('../middleware/AuthMiddleware');


router.post('/',protect,admin,createMarks);

router.get('/:id/:studentid',protectStudent,getMarksbyID);

router.put('/:id/:studentid',protect,admin,updateMarks);

router.delete('/:id/:studentid',protect,admin,deleteMarks);

module.exports=router;

