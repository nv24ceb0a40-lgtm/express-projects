import mongoose from "mongoose";
//schema of the tasks
const taskSchema = new mongoose.Schema({
   //feilds
    title: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "pending"
    }
});

// using the s hema to create a model inthe db
const Task = mongoose.model("Task", taskSchema);

export default Task;