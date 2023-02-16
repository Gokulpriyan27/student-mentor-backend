const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const db = async()=>{
    try {
        await mongoose.connect(process.env.database);
        console.log(`Connected to database!`)
    } catch (error) {
        console.log(error)
    }
}

module.exports = db;