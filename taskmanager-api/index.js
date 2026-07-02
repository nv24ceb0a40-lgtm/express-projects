import dotenv from"dotenv";
dotenv.config();
//console.log(process.env.MONGO_URL);
import express from "express";
import connection from "./config/db.js";
import tasks from "./routes/tasks.js"
const app=express();
app.use(express.json())
connection();
app.use((req,res,next)=>{
    //console.log(req.url);
    //console.log(req.method);
    next();
})
app.use("/tasks",tasks);
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: err.message });
});
const port=process.env.PORT;
const server=app.listen(port,()=>{
    console.log(`the server is running on ${port}`); 
})

