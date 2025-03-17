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

const { protect, admin, protectStudent, protectInstitute } = require('../middleware/AuthMiddleware');

router.post('/', CreateInstitute);
router.put('/:id',protectInstitute, UpdateInstitute);
router.delete('/:id',protect,admin, DeleteInstitute);
router.post('/forget-password', forgetPasswordInstitute);
router.post('/reset-password/:token', resetPasswordInstitute);
router.get('/',protectStudent, GetInstitutes);
router.get('/:id',protectStudent, GetInstituteById);
router.post('/login', LoginInstitute);
router.get('/students/:id',protectInstitute,GetStudentByInstituteId);

module.exports = router;
