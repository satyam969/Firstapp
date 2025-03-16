const mongoose=require('mongoose');

const RegisterSchema=mongoose.Schema({
    exam:{type: mongoose.Types.ObjectId, ref:'Exam', required: true},
    students:[{type: mongoose.Types.ObjectId, ref:'Student', required:true}] ,

},{Timestamp:true})

const Register=mongoose.model('Register', RegisterSchema);

module.exports=Register;