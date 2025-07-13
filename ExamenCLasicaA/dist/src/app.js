"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHabit = createHabit;
exports.completeHabitToday = completeHabitToday;
exports.getHabitStreak = getHabitStreak;
exports.clearHabits = clearHabits;
const habitos = [];
let idActual = 1;
function createHabit(name) {
    const habito = {
        id: idActual++,
        name,
        completions: [],
        streak: 0
    };
    habitos.push(habito);
    return habito;
}
function completeHabitToday(id, today = new Date()) {
    const habito = habitos.find(h => h.id === id);
    const hoyStr = today.toDateString();
    const yaCompletado = habito.completions.some(fecha => fecha.toDateString() === hoyStr);
    if (!yaCompletado) {
        habito.completions.push(today);
        // Calcular racha: si ayer se completó, incrementar, si no, reiniciar a 1
        const ayer = new Date(today);
        ayer.setDate(ayer.getDate() - 1);
        const ayerStr = ayer.toDateString();
        const seHizoAyer = habito.completions.some(fecha => fecha.toDateString() === ayerStr);
        if (seHizoAyer) {
            habito.streak++; // Incrementar racha
        }
        else {
            habito.streak = 1; // Reiniciar racha
        }
    }
    return habito;
}
function getHabitStreak(id) {
    const habito = habitos.find(h => h.id === id);
    return habito.streak;
}
function clearHabits() {
    habitos.length = 0;
    idActual = 1;
}
