import request from "supertest";
import app from "../src/server";
import { addTask, getUpcomingTasks } from "../src/app";
import { describe, test, expect, jest } from '@jest/globals';

describe("Task Reminder Service (TS)", () => {
    test("POST /tasks - crear una tarea", async () => {
        const res = await request(app).post("/tasks").send({
            title: "Tarea 1",
            dueDate: new Date(Date.now() + 1000 * 60 * 60).toISOString(),
            priority: 3,
        });
        expect(res.statusCode).toBe(201);
        expect(res.body.title).toBe("Tarea 1");
    });

    test("GET /tasks/upcoming - detectar próximas tareas", async () => {
        await addTask({
            title: "Tarea próxima",
            dueDate: new Date(Date.now() + 1000 * 60 * 60 * 4).toISOString(),
            priority: 2,
        });

        const upcoming = getUpcomingTasks();
        expect(upcoming.some(t => t.title === "Tarea próxima")).toBe(true);
    });

    test("No incluir tareas vencidas como próximas", async () => {
        await addTask({
            title: "Vencida",
            dueDate: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
            priority: 2,
        });

        const upcoming = getUpcomingTasks();
        expect(upcoming.some(t => t.title === "Vencida")).toBe(false);
    });

    test("Simular console.log en tareas próximas", () => {
        const spy = jest.spyOn(console, "log").mockImplementation(() => { });
        addTask({
            title: "Consola",
            dueDate: new Date(Date.now() + 1000 * 60 * 60 * 2).toISOString(),
            priority: 4,
        });
        expect(spy).toHaveBeenCalledWith("Recordatorio enviado");
        spy.mockRestore();
    });
});