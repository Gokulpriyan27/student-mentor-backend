const express = require("express");
const {createMentor,getAllMentors,assignMentor,getMentorDetails} = require("../CONTROLLERS/mentor.controllers")
const router = express.Router();


router.post("/create",createMentor);
router.get("/getallmentors",getAllMentors);
router.post("/assignmentor",assignMentor);
router.get("/getmentordetails",getMentorDetails);


module.exports = router;