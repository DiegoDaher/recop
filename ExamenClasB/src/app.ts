export interface Loan {
  id: number;
  amount: number;
  termMonths: number;
  payments: number[];
}

const prestamos: Loan[] = [];
let idActual = 1;

export function createLoan(amount: number, term: number): Loan {
  const prestamo: Loan = {
    id: idActual++,
    amount,
    termMonths: term,
    payments: []
  };
  
  prestamos.push(prestamo);
  return prestamo;
}

export function payLoan(id: number, payment: number): Loan {
  const prestamo = prestamos.find(p => p.id === id);
  
  // Calcular cuánto se ha pagado en total
  let totalPagado = 0;
  for (let pago of prestamo!.payments) {
    totalPagado += pago;
  }
  
  const saldoRestante = prestamo!.amount - totalPagado;
  
  // Verificar que no se pague más de lo que se debe
  if (payment > saldoRestante) {
    throw new Error("Pago excede el saldo restante");
  }
  
  // Agregar el pago al arreglo
  prestamo!.payments.push(payment);
  
  return prestamo!;
}

export function getLoan(id: number): { loan: Loan; balance: number; isPaid: boolean } {
  const prestamo = prestamos.find(p => p.id === id);
  
  // Calcular total pagado
  let totalPagado = 0;
  for (let pago of prestamo!.payments) {
    totalPagado += pago;
  }
  
  const saldo = prestamo!.amount - totalPagado;
  const estaPagado = saldo === 0;
  
  return {
    loan: prestamo!,
    balance: saldo,
    isPaid: estaPagado
  };
}

export function clearLoans() {
  prestamos.length = 0;
  idActual = 1;
}
