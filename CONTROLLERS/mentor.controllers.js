const mentor = require("../MODELS/Mentor.model");
const student = require("../MODELS/student.model")

const createMentor = async(req,res)=>{
    try {
        const payload = req.body;
        const newMentor = await new mentor(payload);
        await newMentor.save();
        return res.status(201).send({message:"Mentor Created successfully",info:newMentor})
    } catch (error) {
        return res.status(500).send({message:"Mentor creation not successful!",info:error})
    }
}

const getAllMentors = async(req,res)=>{
    try {
        const getMentors = await mentor.find();
        let MentorName  = getMentors.map((element)=>{
            return element.name;
        })
        return res.status(200).send({info:MentorName})
    } catch (error) {
        return res.status(500).send({message:"Failed"})
    }
}

const assignMentor = async(req,res)=>{
    try {
        const payload =req.body;
        let studentId = payload.studentId;
        const resultStudent = await student.findByIdAndUpdate(studentId,{$push:{"mentorname":payload.mentor}});
        await resultStudent.save();
        
        const findMentor = await mentor.findOne({name:payload.mentor});
        

        const addStudentToMentor = await mentor.findByIdAndUpdate(findMentor._id,{$push:{"mentees":resultStudent.name}});
      
        addStudentToMentor.save();
        return res.status(200).send({message:"Mentor assignation successful"})
    } catch (error) {
        return res.status(200).send({message:"Error getting the data",info:error})
    }
}

const getMentorDetails = async(req,res)=>{
    try {
        const getMenDetails = await mentor.find();
        return res.status(200).send({info:getMenDetails}); 
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {createMentor,getAllMentors,assignMentor,getMentorDetails}