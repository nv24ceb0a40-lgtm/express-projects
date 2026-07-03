import dotenv from"dotenv";
dotenv.config();
import express from "express";
import connection from "./config/db.js";
import tasks from "./routes/tasks.js"
import auth from "./routes/auth.js";
const app=express();
//this default parses the body from client so we can use
app.use(express.json())
//this is afunction imported which establishes the db connection
connection();
//using modular routing
//all the routes which are imported from routes/tasks are used here
// all the urls has baseurl/tasks/(whatevercalled)
app.use("/tasks",tasks);
app.use("/auth",auth);

// this is app level middleware for checking any error from routes
app.use((err, req, res, next) => {
    console.log(err.message);
    res.status(500).json({ error: err.message });
});
// since we are posting this file in  github we dont want our port to be visible so using dotenv package
const port=process.env.PORT;
//code that establishes server
const server=app.listen(port,()=>{
    console.log(`the server is running on ${port}`); 
})

