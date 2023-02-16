const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const app = express();
const databaseConnect = require("./DATABASE/dbConnect")
const cors =require("cors")

//custom imports

const mentorRoutes = require("./ROUTES/createMentor")
const studentRoutes =require("./ROUTES/routes.student")

databaseConnect();

//

app.use(cors({
    origin:process.env.client_url,
    credentials:true
}))
//custom middlewares

app.get("/",(req,res)=>{
    try {
        let message="Visit ----- [ https://student-mentor-application.netlify.app/ ] -----  to view the working with UI (frontend)";
        return res.status(200).send(message);
    } catch (error) {
        return res.status(500).send("Internal server Error")
    }
})

//
app.use(express.json());
app.use("/api/mentors",mentorRoutes)
app.use("/api/students",studentRoutes)

//
const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server running in ${PORT}`)
})
