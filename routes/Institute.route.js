
const express = require('express');
const router=express.Router();

// Importing the required controllers

const{CreateInstitute,UpdateInstitute, DeleteInstitute} = require('../controller/instituteController');

// Defining the routes

router.put('/:id', UpdateInstitute);
router.delete('/:id', DeleteInstitute);

router.post('/', CreateInstitute);

module.exports = router;

