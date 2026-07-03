import express from "express";
import User from "../models/user.js";
const router=express.Router();
// route for registration
// async since save needs to interact with db
router.post("/register", async (req,res,next)=>{
    //data from body
    const {email,password}=req.body;
    try{
        const user=new User({email,password});
        await user.save();
        res.status(201).json({ message: 'User registered', userId: user._id });
    }
    catch(err)
    {
        next(err);
    }
})

export default router;
