const productos = [
  { nombre: 'Camiseta', precio: 20, cantidad: 10, categoria: 'Ropa', fechaDeIngreso: '2024-11-01' },
  { nombre: 'Pantalones', precio: 50, cantidad: 0, categoria: 'Ropa', fechaDeIngreso: '2024-10-15' },
  { nombre: 'Zapatos', precio: 30, cantidad: 5, categoria: 'Calzado', fechaDeIngreso: '2024-11-10' },
  { nombre: 'Sombrero', precio: 15, cantidad: 20, categoria: 'Accesorios', fechaDeIngreso: '2024-11-05' },
  { nombre: 'Chaqueta', precio: 80, cantidad: 7, categoria: 'Ropa', fechaDeIngreso: '2024-11-11' },
  { nombre: 'Guantes', precio: 25, cantidad: 15, categoria: 'Accesorios', fechaDeIngreso: '2024-10-20' },
  { nombre: 'Bufanda', precio: 18, cantidad: 12, categoria: 'Accesorios', fechaDeIngreso: '2024-11-09' },
  { nombre: 'Gafas de sol', precio: 45, cantidad: 9, categoria: 'Accesorios', fechaDeIngreso: '2024-10-31' },
  { nombre: 'Reloj', precio: 120, cantidad: 3, categoria: 'Accesorios', fechaDeIngreso: '2024-11-03' },
  { nombre: 'Bolso', precio: 60, cantidad: 6, categoria: 'Accesorios', fechaDeIngreso: '2024-10-25' },
  { nombre: 'Cinturón', precio: 22, cantidad: 13, categoria: 'Accesorios', fechaDeIngreso: '2024-11-08' },
  { nombre: 'Vestido', precio: 70, cantidad: 4, categoria: 'Ropa', fechaDeIngreso: '2024-11-12' },
  { nombre: 'Falda', precio: 35, cantidad: 11, categoria: 'Ropa', fechaDeIngreso: '2024-10-18' },
  { nombre: 'Calcetines', precio: 8, cantidad: 30, categoria: 'Ropa', fechaDeIngreso: '2024-11-02' },
  { nombre: 'Pañuelo', precio: 12, cantidad: 25, categoria: 'Accesorios', fechaDeIngreso: '2024-11-07' },
  { nombre: 'Camiseta sin mangas', precio: 15, cantidad: 14, categoria: 'Ropa', fechaDeIngreso: '2024-10-22' },
  { nombre: 'Pantalones cortos', precio: 40, cantidad: 8, categoria: 'Ropa', fechaDeIngreso: '2024-10-30' },
  { nombre: 'Botas', precio: 90, cantidad: 5, categoria: 'Calzado', fechaDeIngreso: '2024-11-06' },
  { nombre: 'Sandalias', precio: 28, cantidad: 18, categoria: 'Calzado', fechaDeIngreso: '2024-10-27' },
  { nombre: 'Zapatos deportivos', precio: 65, cantidad: 7, categoria: 'Calzado', fechaDeIngreso: '2024-11-13' },
];

// 1. Ordena el array de menor a mayor por precio
function ordenarPorPrecio(array) {
  return array.slice().sort((a, b) => a.precio - b.precio);
}

// 2. Ordena el array de menor a mayor por fecha de ingreso
function ordenarPorFecha(array) {
  return array.slice().sort((a, b) => new Date(a.fechaDeIngreso) - new Date(b.fechaDeIngreso));
}

// 3. Selecciona los artículos que tienen un precio inferior a 25
function productosBaratos(array) {
  return array.filter(producto => producto.precio < 25);
}

// 4. Indica el porcentaje de stock de cada producto
function calcularPorcentajeDeStock(array) {
  const maxStock = 30;
  return array.map(producto => ({
    ...producto,
    porcentajeStock: ((producto.cantidad / maxStock) * 100).toFixed(2) + '%'
  }));
}

// 5. Agrupa los artículos por categoría
function agruparPorCategoria(array) {
  return array.reduce((acc, producto) => {
    if (!acc[producto.categoria]) acc[producto.categoria] = [];
    acc[producto.categoria].push(producto);
    return acc;
  }, {});
}

// 6. Muestra los 3 productos más caros
function productosMasCaros(array) {
  return array.slice().sort((a, b) => b.precio - a.precio).slice(0, 3);
}

// 7. Calcula cuánto ganaremos si vendemos todos los accesorios
function gananciaAccesorios(array) {
  return array
    .filter(producto => producto.categoria === 'Accesorios')
    .reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
}

// 8. Muestra los productos que han ingresado en los últimos 15 días
function productosRecientes(array) {
  const hoy = new Date();
  return array.filter(producto => {
    const fechaIngreso = new Date(producto.fechaDeIngreso);
    const diferenciaDias = (hoy - fechaIngreso) / (1000 * 60 * 60 * 24);
    return diferenciaDias <= 15;
  });
}

// 9. Muestra el calzado con precio entre 20 y 30
function calzadoEnRango(array) {
  return array.filter(
    producto => producto.categoria === 'Calzado' && producto.precio >= 20 && producto.precio <= 30
  );
}

// 10. Agrega un nuevo producto
function agregarProducto(array, nuevoProducto) {
  return [...array, nuevoProducto];
}

// 11. Realiza un descuento del 5% a los 5 productos con mayor stock
function aplicarDescuento(array) {
  const maxStock = 30;
  const productosConDescuento = array
    .slice()
    .sort((a, b) => b.cantidad - a.cantidad)
    .slice(0, 5)
    .map(producto => ({
      ...producto,
      precio: (producto.precio * 0.95).toFixed(2),
    }));
  return productosConDescuento;
}

// 12. Borra los productos del mes de octubre
function eliminarProductosOctubre(array) {
  return array.filter(producto => !producto.fechaDeIngreso.startsWith('2024-10'));
}


console.log('1. Ordenado por precio:', ordenarPorPrecio(productos));
console.log('2. Ordenado por fecha:', ordenarPorFecha(productos));
console.log('3. Productos baratos:', productosBaratos(productos));
console.log('4. Porcentaje de stock:', calcularPorcentajeDeStock(productos));
console.log('5. Agrupados por categoría:', agruparPorCategoria(productos));
console.log('6. 3 productos más caros:', productosMasCaros(productos));
console.log('7. Ganancia por accesorios:', gananciaAccesorios(productos));
console.log('8. Productos recientes:', productosRecientes(productos));
console.log('9. Calzado entre 20 y 30:', calzadoEnRango(productos));
console.log('10. Nuevo producto agregado:', agregarProducto(productos, {
  nombre: 'Corbata',
  precio: 10,
  cantidad: 50,
  categoria: 'Accesorios',
  fechaDeIngreso: '2024-11-15'
}));
console.log('11. Productos con descuento:', aplicarDescuento(productos));
console.log('12. Productos sin octubre:', eliminarProductosOctubre(productos));
