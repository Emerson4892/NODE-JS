const pool = require('../config/db');

// Obtener todos los productos
const obtenerProductos = async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM productos ORDER BY id');
        res.json(resultado.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener producto por ID
const obtenerProductoPorId = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await pool.query(
            'SELECT * FROM productos WHERE id = $1',
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.json(resultado.rows[0]);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Crear producto
const crearProducto = async (req, res) => {
    try {
        const { nombre, descripcion, precio, stock } = req.body;

        const resultado = await pool.query(
            `INSERT INTO productos
            (nombre, descripcion, precio, stock)
            VALUES ($1, $2, $3, $4)
            RETURNING *`,
            [nombre, descripcion, precio, stock]
        );

        res.status(201).json({
            mensaje: 'Producto creado correctamente',
            producto: resultado.rows[0]
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Actualizar producto
const actualizarProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion, precio, stock } = req.body;

        const resultado = await pool.query(
            `UPDATE productos
            SET nombre = $1,
                descripcion = $2,
                precio = $3,
                stock = $4
            WHERE id = $5
            RETURNING *`,
            [nombre, descripcion, precio, stock, id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.json({
            mensaje: 'Producto actualizado correctamente',
            producto: resultado.rows[0]
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Eliminar producto
const eliminarProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const resultado = await pool.query(
            'DELETE FROM productos WHERE id = $1 RETURNING *',
            [id]
        );

        if (resultado.rows.length === 0) {
            return res.status(404).json({
                mensaje: 'Producto no encontrado'
            });
        }

        res.json({
            mensaje: 'Producto eliminado correctamente'
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    obtenerProductos,
    obtenerProductoPorId,
    crearProducto,
    actualizarProducto,
    eliminarProducto
};