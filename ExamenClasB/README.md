# Ejercicio: Calculadora de préstamos con validación de pagos (TypeScript)

## Objetivo

Simula un sistema donde se otorgan préstamos. El usuario puede hacer pagos y el sistema debe calcular el saldo restante y validar si el préstamo fue pagado completamente.

## Endpoints

- `POST /loans` — Crear préstamo (`monto`, `plazo`)
- `POST /loans/:id/pay` — Registrar pago (`monto`)
- `GET /loans/:id` — Consultar estado del préstamo

## Reglas

- Llevar registro de pagos.
- Calcular saldo restante.
- No aceptar pagos si el préstamo está completamente pagado.

## Cómo probar

```bash
npm install
npm run build
npm test
