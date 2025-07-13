export interface Loan {
  id: number;
  amount: number;
  termMonths: number;
  payments: number[];
}

const loans: Loan[] = [];
let currentId = 1;

export function createLoan(amount: number, term: number): Loan {
  const loan: Loan = {
    id: currentId++,
    amount,
    termMonths: term,
    payments: []
  };
  
  loans.push(loan);
  return loan;
} // Crea un nuevo préstamo y lo agrega al arreglo de préstamos ((ya venia))

export function payLoan(id: number, payment: number): Loan {
  const loan = loans.find(p => p.id === id); // Buscar el préstamo por ID
  
  // Calcular cuánto se ha pagado en total
  let totalPagado = 0;
  for (let pago of loan!.payments) {
    totalPagado += pago;
  }
  
  const saldoRestante = loan!.amount - totalPagado; // Calcular el saldo restante se agrega el loan! para evitar error de undefined o null (solo si loan no es null o undefined)
  
  // Verificar que no se pague más de lo que se debe
  if (payment > saldoRestante) {
    throw new Error("Pago excede el saldo restante");
  }
  
  // Agregar el pago al arreglo
  loan!.payments.push(payment); // Agregar el pago al arreglo de pagos del préstamo
  
  return loan!; // Regresa el préstamo actualizado
}

export function getLoan(id: number): { loan: Loan; balance: number; isPaid: boolean } {
  const loan = loans.find(p => p.id === id);
  
  // Calcular total pagado
  let totalPagado = 0;
  for (let pago of loan!.payments) {
    totalPagado += pago;
  }
  
  const saldo = loan!.amount - totalPagado; // Calcular el saldo restante
  const estaPagado = saldo === 0; // Verificar si el préstamo está pagado
  
  return {
    loan: loan!,
    balance: saldo,
    isPaid: estaPagado
  }; // Regresa el préstamo, saldo restante y si está pagado
}

export function clearLoans() {
  loans:[] // Reiniciar el arreglo de préstamos
}
