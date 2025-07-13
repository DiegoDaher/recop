import express, { Request, Response } from "express";
import { addTask, listTasks, getUpcomingTasks } from "./app";

const app = express();
app.use(express.json());

app.post("/tasks", (req: Request, res: Response) => {
    try {
        const task = addTask(req.body);
        res.status(201).json(task);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});

app.get("/tasks", (_req: Request, res: Response) => {
    res.json(listTasks());
});

app.get("/tasks/upcoming", (_req: Request, res: Response) => {
    res.json(getUpcomingTasks());
});

export default app;