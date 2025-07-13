import { createHabit, completeHabitToday, getHabitStreak, clearHabits } from '../src/app';

function mockDate(str: string): Date {
  return new Date(str + "T10:00:00");
}

describe('Control de hábitos diarios', () => {
  beforeEach(() => clearHabits());

  test('Crear hábito correctamente', () => {
    const habit = createHabit("Leer");
    expect(habit.name).toBe("Leer");
    expect(habit.streak).toBe(0);
  });

  test('Marcar como completado hoy', () => {
    const habit = createHabit("Ejercicio");
    const today = mockDate("2025-06-26");
    completeHabitToday(habit.id, today);
    expect(getHabitStreak(habit.id)).toBe(1);
  });

  test('Incrementa racha si se completó ayer', () => {
    const habit = createHabit("Meditación");
    completeHabitToday(habit.id, mockDate("2025-06-25"));
    completeHabitToday(habit.id, mockDate("2025-06-26"));
    expect(getHabitStreak(habit.id)).toBe(2);
  });

  test('Reinicia racha si se saltó un día', () => {
    const habit = createHabit("Caminar");
    completeHabitToday(habit.id, mockDate("2025-06-24"));
    completeHabitToday(habit.id, mockDate("2025-06-26"));
    expect(getHabitStreak(habit.id)).toBe(1);
  });

})