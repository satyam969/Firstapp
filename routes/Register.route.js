const express=require('express')

const router= express.Router();


const {
    createRegister,
    getRegisterById,

    deleteRegister,
    getExamsByStudentId,
    getStudentsByExamId,DeleteRegistrationByExamStudent
}=require('../controller/registerController');

const { protect, admin } = require('../middleware/AuthMiddleware');

router.get('/students/:examid',protect,getStudentsByExamId)

router.get('/exams/:studentid',protect,getExamsByStudentId)



router.post('/',protect,createRegister)

router.get('/:id',protect,getRegisterById)



router.delete('/:id',protect,admin,deleteRegister)

router.delete('/exam/:examid/:studentid',protect,admin,DeleteRegistrationByExamStudent)

module.exports=router;


