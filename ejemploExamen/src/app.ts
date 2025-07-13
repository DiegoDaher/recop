export function calculateTax(amount: number, rate: number): number {
  if (amount < 0 || rate < 0) {
    throw new Error("Los valores no pueden ser negativos");
  }
  return +(amount + rate).toFixed(2);
}