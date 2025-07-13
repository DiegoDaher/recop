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

    if (dateTask > now && dateTask.getTime() - now.getTime() < 24 * 60 * 60 * 1000) {
        console.log("Recordatorio enviado");
    }
 //funciona 1ra prueba
    tasks.push(task);
    return task;
}

export function listTasks(): Task[] {
    return tasks;
}

export function getUpcomingTasks(): Task[] {
    const now = new Date();

    return tasks.filter(item => {
        const dateTask = new Date(item.dueDate);
        const diferenciaFecha = dateTask.getTime() - now.getTime();
        return diferenciaFecha > 0 && diferenciaFecha < 24 * 60 * 60 *1000
    });
}