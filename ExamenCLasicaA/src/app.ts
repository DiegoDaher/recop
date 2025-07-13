export interface Habit {
  id: number;
  name: string;
  completions: Date[];
  streak: number;
}

const habitos: Habit[] = [];
let idActual = 1;

export function createHabit(name: string): Habit {
  const habito: Habit = {
    id: idActual++,
    name,
    completions: [],
    streak: 0
  };
  
  habitos.push(habito);
  return habito;
}

export function completeHabitToday(id: number, today: Date = new Date()): Habit {
  const habito = habitos.find(h => h.id === id);
  
  const hoyStr = today.toDateString();
  const yaCompletado = habito!.completions.some(fecha => fecha.toDateString() === hoyStr);
  
  if (!yaCompletado) {
    habito!.completions.push(today);
    
    // Calcular racha: si ayer se completó, incrementar, si no, reiniciar a 1
    const ayer = new Date(today);
    ayer.setDate(ayer.getDate() - 1);
    const ayerStr = ayer.toDateString();
    
    const seHizoAyer = habito!.completions.some(fecha => fecha.toDateString() === ayerStr);
    
    if (seHizoAyer) {
      habito!.streak++; // Incrementar racha
    } else {
      habito!.streak = 1; // Reiniciar racha
    }
  }
  
  return habito!;
}

export function getHabitStreak(id: number): number {
  const habito = habitos.find(h => h.id === id);
  return habito!.streak;
}

export function clearHabits() {
  habitos.length = 0;
  idActual = 1;
}
