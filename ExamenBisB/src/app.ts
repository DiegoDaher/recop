export interface Product {
  id: string;
  name: string;
  stock: number;
  stockMinimo: number;
}

const db: { products: Product[] } = {
  products: []//simular base de datos (ya venia)
};

export function resetDatabase() {
  db.products = [];// Reiniciar el arreglo a vacio
}

export function addProduct(product: Omit<Product, 'id'>): Product {
  // Generar un ID único para el producto
  const id = Math.random().toString(36);
  const newProduct: Product = {
    id,
    ...product//trae todos los atributos del objeto product con el ...
  };// Asignar el ID generado al nuevo producto en un objeto
    // Agregar el producto a la base de datos
  db.products.push(newProduct);  
  return newProduct;//regresa el producto creado
}

export function sellProduct(id: string): Product | null {
  // Buscar el producto por ID
  const product = db.products.find(p => p.id === id);
  
  if (!product) {
    return null;
  }
  
  // Verificar que hay stock disponible
  if (product.stock <= 0) {
    return null;
  }
  
  // Reducir el stock
  product.stock--;
  
  // Verificar si el stock llegó al mínimo o menos
  if (product.stock <= product.stockMinimo) {
    console.log('¡Stock bajo!');
  }
  
  return product;
}

export function getLowStockProducts(): Product[] {
  // Filtrar productos que tienen stock igual o menor al mínimo
  return db.products.filter(product => product.stock <= product.stockMinimo);
}

export { db };
