#  Ejercicio: Gestor de Tareas con Recordatorios

##  Objetivo

Implementa un servicio en Node.js para manejar tareas con fechas de vencimiento. El sistema debe identificar tareas que están próximas a vencer (menos de 24 horas) y simular un recordatorio con un `console.log`.

##  Endpoints requeridos

- `POST /tasks`: Agrega una nueva tarea.
- `GET /tasks`: Lista todas las tareas.
- `GET /tasks/upcoming`: Lista tareas que vencen en menos de 24h.

> Cada tarea debe tener: `title`, `dueDate` (ISO string), `priority` (1-5).

## Condiciones

- Si una tarea está próxima a vencer al momento de crearse, imprime `Recordatorio enviado`.
- Las tareas vencidas **no deben** considerarse próximas.


Ejecuta con:

```bash
npm install
npm test