const express= require("express");
const app= express();



const mentorsRoute= require("./routes/mentors")
const studentsRoute= require("./routes/students")

app.use(express.json());

app.use("/mentors",mentorsRoute);
app.use("/students",studentsRoute)



app.listen(3001,()=>{
    console.log("server listening at port 3001")
})