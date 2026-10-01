require('dotenv').config();

const app = require('./src/app');
const pool = require('./src/config/db');

const PORT = process.env.PORT || 3000;

// Probar conexión al iniciar
pool.query('SELECT NOW()')
    .then(() => {
        console.log('Base de datos disponible');
    })
    .catch((error) => {
        console.error('No se pudo conectar a PostgreSQL:', error.message);
    });

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
