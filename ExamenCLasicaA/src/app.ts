export interface Habit {
  id: number;
  name: string;
  completions: Date[];
  streak: number;
}

const habits: Habit[] = [];
let currentId = 1;

export function createHabit(name: string): Habit {

}

export function completeHabitToday(id: number, today: Date = new Date()): Habit {

}

export function getHabitStreak(id: number): number {

}

export function clearHabits() {

}
