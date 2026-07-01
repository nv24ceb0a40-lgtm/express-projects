import express from "express";
import dotenv from"dotenv";
dotenv.config();
import tasks from "./routes/tasks.js"
const app=express();
app.use((req,res,next)=>{
    console.log(req.url);
    console.log(req.method);
    next();
})
app.use(express.json())
app.use("/tasks",tasks);
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: err.message });
});
const port=process.env.PORT;
const server=app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})

