//el siguiente comando debe ponerse en mongosh
use tiendaOnline
// Insertar productos en la colección "productos"
db.productos.insertMany([
    {
      nombre: "Camiseta",
      precio: 19.99,
      categoria: "Ropa",
      stock: 100
    },
    {
      nombre: "Pantalones",
      precio: 39.99,
      categoria: "Ropa",
      stock: 50
    },
    {
      nombre: "Auriculares",
      precio: 29.99,
      categoria: "Electrónica",
      stock: 200
    },
    {
      nombre: "Mouse inalámbrico",
      precio: 15.99,
      categoria: "Electrónica",
      stock: 150
    },
    {
      nombre: "Zapatos deportivos",
      precio: 59.99,
      categoria: "Calzado",
      stock: 75
    }
  ]);
  
  // Comando para verificar los datos insertados
  db.productos.find().pretty();
  
