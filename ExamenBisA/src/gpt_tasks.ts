interface Task {
    title: string;
    dueDate: string;
    priority: number;
    createdAt?: Date;
}

const tasks: Task[] = [];

export function addTask(task: Task): Task {
    const newTask = {
        title:task.title,
        dueDate:task.dueDate,
        priority:task.priority,
        cretedAt:new Date()
    };
    const dueDate = new Date (task.dueDate);
    const now = new Date();
    const timeDiff = dueDate.getTime() - now.getTime();
    const hoursDiff = timeDiff / (1000*60*60);

    if (hoursDiff > 0 && hoursDiff < 24){
        console.log("Recordatorio enviado");
    }

    tasks.push(newTask);
    return newTask;
}

export function listTasks(): Task[] {
    return tasks;
}

export function getUpcomingTasks(): Task[] {
    const now = new Date();
    const dia = 24 * 60 * 60 * 1000;

    return tasks.filter (task => {
        const dueDate = new Date (task.dueDate);
        const timeDiff = dueDate.getTime() - now.getTime();
        return timeDiff > 0 && timeDiff < dia;
    })
}