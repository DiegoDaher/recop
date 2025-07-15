export interface Habit {
  id: number;
  name: string;
  completions: Date[];
  streak: number;
}

const habits: Habit[] = [];
let currentId = 1;

export function createHabit(name: string): Habit {  
  const newHabit: Habit = {
    id: currentId++,
    name,
    completions: [],
    streak: 0
  };
  
  habits.push(newHabit);
  return newHabit;
}

export function completeHabitToday(id: number, today: Date = new Date()): Habit {
  const habito = habits.find(h => h.id === id); // Buscar el hábito por ID
  
  const hoyStr = today.toDateString();
  const Completado = habito!.completions.some(fecha => fecha.toDateString() === hoyStr);
  
  if (!Completado) {
    habito!.completions.push(today);
    
    // Calcular racha: si ayer se completó, incrementar, si no, reiniciar a 1
    const ayer = new Date(today); 
    ayer.setDate(ayer.getDate() - 1); //primero convertimos la fecha de ayer restandole un dia y luego pasarlo a string
    const ayerStr = ayer.toDateString();  //
    
    const tieneRacha = habito!.completions.some(fecha => fecha.toDateString() === ayerStr); //verificar en un booleano si se completó ayer y tiene racha
    
    if (tieneRacha) {
      habito!.streak++; // Incrementar racha
    } else {
      habito!.streak = 1; // Reiniciar racha
    }
  }
  
  return habito!;
}

export function getHabitStreak(id: number): number {
  const habito = habits.find(h => h.id === id); // Buscar el hábito por ID
  return habito!.streak; // Regresa la racha del hábito
}

export function clearHabits() {
  habits.length = 0; // Reiniciar el arreglo a vacio
  currentId = 1; // Reiniciar el ID a 1
}
