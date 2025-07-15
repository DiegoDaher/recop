export interface Habit {
  id: number;
  name: string;
  completions: Date[];
  streak: number;
}

const habits: Habit[] = [];
let currentId = 1;

export function createHabit(name: string): Habit {  
  const newHabit : Habit = {
    id : currentId++,
    name,
    completions:[],
    streak:0,
  }

  habits.push(newHabit);
  return newHabit;
}

export function completeHabitToday(id: number, today: Date = new Date()): Habit {
  const habit = habits.find(h => h.id ===id);
  const todayStr = today.toDateString();

  const completed = habit!.completions.some(date => date.toDateString() === todayStr);
  if (!completed){
    habit!.completions.push(today);

    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate()-1);
    const yesterdayStr= yesterday.toDateString();

    const hasStreak = habit!.completions.some(date => date.toDateString()=== yesterdayStr);
    if (hasStreak){
      habit!.streak++;
    }else{
      habit!.streak = 1;
    }
  }
  return habit!;
}

export function getHabitStreak(id: number): number {
  const habit = habits.find(h => h.id ===id)
   return habit!.streak; // Regresa la racha del hábito
}

export function clearHabits() {
  habits.length = 0;
  currentId = 1;

}
