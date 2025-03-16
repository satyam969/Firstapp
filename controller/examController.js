const Exam=require('../models/Exam.model')


const createExam=async(req,res)=>{

    try{
        const newExam=new Exam(req.body)
        await newExam.save()
        res.status(201).json(newExam)
    }catch(error){
        res.status(400).json({error:error.message})
    }

}

const getExams=async(req,res)=>{
    try{
        const exams=await Exam.find()
        res.json(exams)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const getExamById=async(req,res)=>{
    try{
        const exam=await Exam.findById(req.params.id)
        if(!exam){
            return res.status(404).json({message:'Exam not found'})
        }
        res.json(exam)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const getExamsByInstitute=async(req,res)=>{
    try{
        const exams=await Exam.find({institute:req.params.institute})
        if(!exams.length){
            return res.status(404).json({message:'No exams found for this institute'})
        }
        res.json(exams)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateExam=async(req,res)=>{
    try{
        const updatedExam=await Exam.findByIdAndUpdate(req.params.id,req.body,{new:true})
        if(!updatedExam){
            return res.status(404).json({message:'Exam not found'})
        }
        res.json(updatedExam)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const deleteExam=async(req,res)=>{
    try{
        const deletedExam=await Exam.findByIdAndDelete(req.params.id)
        if(!deletedExam){
            return res.status(404).json({message:'Exam not found'})
        }
        res.json(deletedExam)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports={
    createExam,
    getExams,
    getExamById,
    getExamsByInstitute,
    updateExam,
    deleteExam
}