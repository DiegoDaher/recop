import { addProduct, sellProduct, getLowStockProducts, resetDatabase } from '../src/app';

describe('Inventario con alerta de stock mínimo', () => {
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    resetDatabase();
    consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  test('Agregar producto correctamente', () => {
    const p = addProduct({ name: 'Mouse', stock: 10, stockMinimo: 2 });
    expect(p).toHaveProperty('id');
    expect(p.name).toBe('Mouse');
  });

  test('Vender producto y reducir stock', () => {
    const p = addProduct({ name: 'Teclado', stock: 5, stockMinimo: 1 });
    const sold = sellProduct(p.id)!;
    expect(sold.stock).toBe(4);
  });

  test('Detectar productos con stock bajo', () => {
    const p = addProduct({ name: 'Monitor', stock: 2, stockMinimo: 2 });
    sellProduct(p.id);
    const lows = getLowStockProducts();
    expect(lows[0].name).toBe('Monitor');
  });

  test('Imprimir alerta si stock cae al mínimo', () => {
    const p = addProduct({ name: 'Laptop', stock: 2, stockMinimo: 1 });
    sellProduct(p.id); // 1
    sellProduct(p.id); // 0 → alerta
    expect(consoleSpy).toHaveBeenCalledWith('¡Stock bajo!');
  });
});
