import { calculateTax } from "../src/app";

describe('Función de cálculo de impuestos', () => {
  test('Calcula correctamente el impuesto', () => {
    expect(calculateTax(100, 0.16)).toBe(16.00);