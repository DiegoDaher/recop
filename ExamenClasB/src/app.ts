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
}

export function payLoan(id: number, payment: number): Loan {

}

export function getLoan(id: number): { loan: Loan; balance: number; isPaid: boolean } {

}

export function clearLoans() {

}
