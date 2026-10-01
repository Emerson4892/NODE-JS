const express = require('express');
const productosRoutes = require('./routes/productos.routes');

const app = express();

// Permite recibir JSON
app.use(express.json());

// Ruta de prueba
app.get('/', (req, res) => {
    res.json({
        mensaje: 'API de productos funcionando correctamente'
    });
});

// Rutas del CRUD de productos
app.use('/api/productos', productosRoutes);

module.exports = app;