const express = require('express');
const router = express.Router();

const {
    CreateInstitute,
    UpdateInstitute,
    DeleteInstitute,
    forgetPasswordInstitute,
    resetPasswordInstitute,
    GetInstitutes,
    LoginInstitute,
    GetInstituteById,
    GetStudentByInstituteId
} = require('../controller/instituteController');

const { protect, admin } = require('../middleware/AuthMiddleware');

router.post('/', CreateInstitute);
router.put('/:id',protect, UpdateInstitute);
router.delete('/:id',protect,admin, DeleteInstitute);
router.post('/forget-password', forgetPasswordInstitute);
router.post('/reset-password/:token', resetPasswordInstitute);
router.get('/',protect,admin, GetInstitutes);
router.get('/:id',protect, GetInstituteById);
router.post('/login', LoginInstitute);
router.get('/students/:id',protect,GetStudentByInstituteId);

module.exports = router;
