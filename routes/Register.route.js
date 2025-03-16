const express=require('express')

const router= express.Router();


const {
    createRegister,
    getRegisterById,
    addStudent,
    removeStudent,
    deleteRegister,
    getExamsByStudentId,
    getStudentsByExamId
}=require('../controller/registerController');
const { protect, admin } = require('../middleware/AuthMiddleware');

router.get('/students/:examid',protect,getStudentsByExamId)

router.get('/exams/:studentid',protect,getExamsByStudentId)

// in the frontend using exam id find if some registration is there if not then call the create route and if there are any, just
// call the addstudent route using the id of registration

router.post('/',protect,createRegister)

router.get('/:id',protect,getRegisterById)

router.put('/:id',protect,addStudent)

router.delete('/:id',protect,admin,removeStudent)

router.delete('/:id',protect,admin,deleteRegister)

module.exports=router;


