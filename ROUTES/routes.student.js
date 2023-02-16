const express = require("express");
const router = express.Router();


const {createStudent,getAllStudents,getAStudent,getStudentDetails} = require("../CONTROLLERS/student.controllers")

router.post("/create",createStudent)


router.get("/getallstudents",getAllStudents)

router.get("/getastudent/:id",getAStudent)

router.get("/getstudentdetails",getStudentDetails)

module.exports = router;