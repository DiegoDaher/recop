import express from 'express';
import { addProduct, sellProduct, getLowStockProducts } from './app';

const app = express();
app.use(express.json());

app.post('/products', (req, res) => {
  const { name, stock, stockMinimo } = req.body;
  if (!name || stock == null || stockMinimo == null) {
    return res.status(400).json({ error: 'Parámetros incompletos' });
  }
  const product = addProduct({ name, stock, stockMinimo });
  res.status(201).json(product);
});

app.post('/products/:id/sell', (req, res) => {
  const { id } = req.params;
  const product = sellProduct(id);
  if (!product) return res.status(400).json({ error: 'Venta inválida' });
  res.json(product);
});

app.get('/products/low-stock', (req, res) => {
  const products = getLowStockProducts();
  res.json(products);
});

export default app;
