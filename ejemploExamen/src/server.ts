import express from 'express';
import { createLoan, payLoan, getLoan } from './app';

const app = express();
app.use(express.json());

app.post('/loans', (req, res) => {
  const { amount, term } = req.body;
  if (!amount || !term) {
    return res.status(400).json({ error: 'Parámetros faltantes' });
  }
  const loan = createLoan(Number(amount), Number(term));
  res.status(201).json(loan);
});

app.post('/loans/:id/pay', (req, res) => {
  const id = Number(req.params.id);
  const { amount } = req.body;
  if (!amount) {
    return res.status(400).json({ error: 'Monto de pago requerido' });
  }

  try {
    const loan = payLoan(id, Number(amount));
    res.json(loan);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/loans/:id', (req, res) => {
  const id = Number(req.params.id);
  try {
    const status = getLoan(id);
    res.json(status);
  } catch (err: any) {
    res.status(404).json({ error: err.message });
  }
});

export default app;
