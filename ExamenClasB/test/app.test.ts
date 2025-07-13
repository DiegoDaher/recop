import { clearLoans, createLoan, payLoan, getLoan } from "../src/app";

describe('Calculadora de préstamos', () => {
  beforeEach(() => {
    clearLoans();
  });

  test('Crear préstamo correctamente', () => {
    const loan = createLoan(1000, 12);
    expect(loan.amount).toBe(1000);
    expect(loan.termMonths).toBe(12);
  });

  test('Registrar pago y reducir deuda', () => {
    const loan = createLoan(1000, 12);
    payLoan(loan.id, 300);
    const status = getLoan(loan.id);
    expect(status.balance).toBe(700);
    expect(status.isPaid).toBe(false);
  });

  test('Evitar pagos mayores al saldo', () => {
    const loan = createLoan(500, 6);
    payLoan(loan.id, 300);
    expect(() => payLoan(loan.id, 300)).toThrow("Pago excede el saldo restante");
  });

  test('Confirmar préstamo pagado cuando saldo es 0', () => {
    const loan = createLoan(200, 3);
    payLoan(loan.id, 100);
    payLoan(loan.id, 100);
    const status = getLoan(loan.id);
    expect(status.balance).toBe(0);
    expect(status.isPaid).toBe(true);
  });
});