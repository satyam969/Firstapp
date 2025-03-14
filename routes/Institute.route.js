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
    GetInstituteById
} = require('../controller/instituteController');

router.post('/', CreateInstitute);
router.put('/:id', UpdateInstitute);
router.delete('/:id', DeleteInstitute);
router.post('/forget-password', forgetPasswordInstitute);
router.post('/reset-password/:token', resetPasswordInstitute);
router.get('/', GetInstitutes);
router.get('/:id', GetInstituteById);
router.post('/login', LoginInstitute);

module.exports = router;
