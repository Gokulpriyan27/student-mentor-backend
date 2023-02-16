const student = require("../MODELS/student.model");

const createStudent = async(req,res)=>{
    try {
        
        const payload = req.body;
        const studentCreate = await new student(payload);
        await studentCreate.save();
        return res.status(201).send({message:"Student created successfully!",info:studentCreate})
    } catch (error) {
        return res.status(500).send(error)
    }
}

const getAllStudents = async(req,res)=>{
    try {
        const getStudents = await student.find();
        const MentorYetToAssign = [];
        for(let i=0;i<getStudents.length;i++){
            if(getStudents[i].mentorname.length===0){
                MentorYetToAssign.push(getStudents[i])
            }
        }
        return res.status(200).send(MentorYetToAssign)
    } catch (error) {
        return res.status(500).send({message:"Error while retriving data",info:error})
    }
}

const getAStudent = async(req,res)=>{
    try {
        const getStudent = await student.findOne({_id:req.params.id});
        return res.status(200).send({info:getStudent})
    } catch (error) {
        return res.status(500).send({message:"Internal server error"})
    }
}

const getStudentDetails = async(req,res)=>{
    try {
        const getDetails = await student.find();
        const result =[];
        getDetails.forEach((element)=>{
            if(element.mentorname.length>0){
                result.push(element)
            }
        })
        return res.status(200).send({info:result})
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {createStudent,getAllStudents,getAStudent,getStudentDetails}