const mongoose =require("mongoose");

const studentSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    mentorname:{
        type: Array,
        required:false
    }
},{
    timestamps: true
})

module.exports = mongoose.model("student",studentSchema)