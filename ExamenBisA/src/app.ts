interface Task {
    title: string;
    dueDate: string;
    priority: number;
    createdAt?: Date;
}

const tasks: Task[] = [];

export function addTask(task: Task): Task {
//complemento para la fecha de creacion
    const now = new Date();
    const dateTask = new Date(task.dueDate);
    const diferenciaFecha = dateTask.getTime() - now.getTime();

    //Verificar si la fecha de la tarea es mayor a la fecha actual y si la diferencia es menor a 24 horas
    if (dateTask > now && diferenciaFecha < 24 * 60 * 60 * 1000) {
        console.log("Recordatorio enviado");
    }
 //funciona 1ra prueba
    tasks.push(task);
    return task;
}

export function listTasks(): Task[] {
    //traer todas las tareas
    return tasks;
}

export function getUpcomingTasks(): Task[] {
    //Definir la fecha actual
    const now = new Date();

    return tasks.filter(item => {
        const dateTask = new Date(item.dueDate); // Convertir la fecha de la tarea a un objeto Date
        const diferenciaFecha = dateTask.getTime() - now.getTime();// Calcular la diferencia en milisegundos
        return diferenciaFecha > 0 && diferenciaFecha < 24 * 60 * 60 *1000// filtrar tareas mayores de diferencia convertido en dias
    });
}