const express = require('express')
const router=express.Router();

const { createMarks,
    getMarksbyID,
    updateMarks,
    deleteMarks}=require('../controller/marksController');
const { protect, admin } = require('../middleware/AuthMiddleware');


router.post('/',createMarks);

router.get('/:id/:studentid',protect,getMarksbyID);

router.put('/:id/:studentid',protect,admin,updateMarks);

router.delete('/:id/:studentid',protect,admin,deleteMarks);

module.exports=router;

