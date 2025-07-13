import express from 'express';
import { createHabit, completeHabitToday, getHabitStreak } from './app';

const app = express();
app.use(express.json());

app.post('/habits', (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Nombre requerido" });
  const habit = createHabit(name);
  res.status(201).json(habit);
});

app.post('/habits/:id/complete', (req, res) => {
  const id = Number(req.params.id);
  try {
    const habit = completeHabitToday(id);
    res.json(habit);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/habits/:id/streak', (req, res) => {
  const id = Number(req.params.id);
  try {
    const streak = getHabitStreak(id);
    res.json({ streak });
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

export default app;
