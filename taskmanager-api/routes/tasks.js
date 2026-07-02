import express from "express";
import arr from "../data/data.js";
const router=express.Router();

router.use((req,res,next)=>{
   // console.log("task router hit");
    next();
})
router.get("/alltasks",(req,res,next)=>{

    res.json(arr);
    // const error = new Error("something went wrong");
    //next(error); 
})

router.get("/pending",(req,res)=>{

    
    const tasks=arr.filter((task)=>{
        
        return task.status=="pending";
    })
    res.json(tasks);
})

router.get("/finished",(req,res)=>{


   const tasks=arr.filter((task)=>{
        
        return task.status==="completed";
    })
    res.json(tasks);
})

router.get("/:id",(req,res)=>{

    const task=arr.filter((task)=>{

           return  task.id===req.params.id;
    })

    res.json(task);
})

router.post("/new",(req,res)=>{
    const {task,status}=req.body;
    arr.push({

        "id":`${arr.length+1}`,
        "task":task,
        "status":status

    });

    res.status(201).json({meassage:"task added"});
})

router.put("/edit/:id",(req,res)=>{

    const task=arr.find((task)=>{
        return task.id===req.params.id;
    })

    task.task=req.body.task;
    task.status=req.body.status;
    res.json(task);

})

export default router;