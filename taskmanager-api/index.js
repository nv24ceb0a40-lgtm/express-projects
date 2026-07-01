import express from "express";
import tasks from "./routes/tasks.js"
const app=express();
app.use(express.json())
app.use("/tasks",tasks);
const port=3001;
const server=app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})

