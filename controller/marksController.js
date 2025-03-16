const Marks=require('../models/marks.model')

const createMarks=async(req,res)=>{
    try{
        const newMarks=new Marks(req.body)
        await newMarks.save()
        res.status(201).json(newMarks)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}

const getMarksbyID = async (req, res) => {
    try {
        const marks = await Marks.findOne({
            exam: req.params.id, 
            student: req.params.studentid
        });

        if (!marks) return res.status(404).json({ message: 'Marks not found' });
        res.json(marks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const updateMarks = async (req, res) => {
    try {
        const { studentid, id } = req.params;
        const updatedMarks = await Marks.findOneAndUpdate(
            { student: studentid, exam: id },
            req.body,
            { new: true }
        );
        if (!updatedMarks) return res.status(404).json({ message: 'Marks not found' });
        res.json(updatedMarks);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteMarks = async (req, res) => {
    try {
        const deletedMarks = await Marks.findOneAndDelete({
            student: req.params.studentid,
            exam: req.params.id
        });
        if (!deletedMarks) return res.status(404).json({ message: 'Marks not found' });
        res.json(deletedMarks);
        } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

    module.exports = {
        createMarks,
        getMarksbyID,
        updateMarks,
        deleteMarks
    };
