#  Ejercicio: Control de hábitos diarios (TypeScript)

## Objetivo

Crea un servicio que permita a un usuario registrar hábitos diarios (como “leer”, “ejercitar”, etc.), verificar si fue completado hoy y calcular una racha de días consecutivos.

## Endpoints

- `POST /habits` — Crear hábito
- `POST /habits/:id/complete` — Marcar como completado hoy
- `GET /habits/:id/streak` — Consultar racha actual

## Reglas

- Solo se puede marcar como completado una vez por día.
- Si se completó ayer, la racha se incrementa.
- Si no se completó ayer, la racha se reinicia.

## Cómo probar

```bash
npm install
npm run build
npm test
```