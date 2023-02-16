const mongoose = require("mongoose");

const mentorSchema = mongoose.Schema({
    name:{
        type: String,
        required : true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mentees:{
        type:Array,
    }
},{
    timestamps: true
})

module.exports = mongoose.model("mentor",mentorSchema)