"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_1 = require("./app");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/habits', (req, res) => {
    const { name } = req.body;
    if (!name)
        return res.status(400).json({ error: "Nombre requerido" });
    const habit = (0, app_1.createHabit)(name);
    res.status(201).json(habit);
});
app.post('/habits/:id/complete', (req, res) => {
    const id = Number(req.params.id);
    try {
        const habit = (0, app_1.completeHabitToday)(id);
        res.json(habit);
    }
    catch (err) {
        res.status(400).json({ error: err.message });
    }
});
app.get('/habits/:id/streak', (req, res) => {
    const id = Number(req.params.id);
    try {
        const streak = (0, app_1.getHabitStreak)(id);
        res.json({ streak });
    }
    catch (err) {
        res.status(404).json({ error: err.message });
    }
});
exports.default = app;
