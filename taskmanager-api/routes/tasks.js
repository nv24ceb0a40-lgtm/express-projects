import express from "express";
import Task from "../models/task.js"
const router=express.Router();
router.get("/alltasks", async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

router.get("/pending", async (req, res, next) => {
    try {
        const tasks = await Task.find({ status: "pending" });
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

router.get("/finished", async (req, res, next) => {
    try {
        const tasks = await Task.find({ status: "finished" });
        res.json(tasks);
    } catch (err) {
        next(err);
    }
});

router.get("/:id", async (req, res, next) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ message: "Task not found" });
        }

        res.json(task);
    } catch (err) {
        next(err);
    }
});

router.post("/new", async (req, res, next) => {
    try {
        const { title, status } = req.body;

        const newTask = await Task.create({
            title,
            status
        });

        res.status(201).json(newTask);
    } catch (err) {
        next(err);
    }
});


export default router;