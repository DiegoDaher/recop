# Ejercicio: Inventario con alerta de stock mínimo (TypeScript)

## Objetivo

Crear un servicio REST para manejar productos en inventario. Si el stock es igual o menor al mínimo, debe imprimir una alerta.

## Endpoints

- `POST /products` — Agregar producto (`name`, `stock`, `stockMinimo`)
- `POST /products/:id/sell` — Vender producto (reduce `stock`)
- `GET /products/low-stock` — Listar productos con stock bajo

## Lógica esperada

- No se puede vender más de lo que hay en stock.
- Si el stock llega al mínimo o menos, imprimir en consola: `¡Stock bajo!`

## Cómo probar

```bash
npm install
npm run build
npm test
```
