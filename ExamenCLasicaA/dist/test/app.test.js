"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
function mockDate(str) {
    return new Date(str + "T10:00:00");
}
describe('Control de hábitos diarios', () => {
    beforeEach(() => (0, app_1.clearHabits)());
    test('Crear hábito correctamente', () => {
        const habit = (0, app_1.createHabit)("Leer");
        expect(habit.name).toBe("Leer");
        expect(habit.streak).toBe(0);
    });
    test('Marcar como completado hoy', () => {
        const habit = (0, app_1.createHabit)("Ejercicio");
        const today = mockDate("2025-06-26");
        (0, app_1.completeHabitToday)(habit.id, today);
        expect((0, app_1.getHabitStreak)(habit.id)).toBe(1);
    });
    test('Incrementa racha si se completó ayer', () => {
        const habit = (0, app_1.createHabit)("Meditación");
        (0, app_1.completeHabitToday)(habit.id, mockDate("2025-06-25"));
        (0, app_1.completeHabitToday)(habit.id, mockDate("2025-06-26"));
        expect((0, app_1.getHabitStreak)(habit.id)).toBe(2);
    });
    test('Reinicia racha si se saltó un día', () => {
        const habit = (0, app_1.createHabit)("Caminar");
        (0, app_1.completeHabitToday)(habit.id, mockDate("2025-06-24"));
        (0, app_1.completeHabitToday)(habit.id, mockDate("2025-06-26"));
        expect((0, app_1.getHabitStreak)(habit.id)).toBe(1);
    });
});
