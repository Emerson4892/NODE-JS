# API REST de Productos

Proyecto desarrollado con Node.js, Express y PostgreSQL.

## Funciones

- CRUD completo de productos
- Crear productos
- Listar productos
- Consultar producto por ID
- Actualizar productos
- Eliminar productos
- Middleware personalizado
- Variables de entorno con `.env`
- Conexión a PostgreSQL

## Tecnologías utilizadas

- Node.js
- Express
- PostgreSQL
- dotenv
- pg
- nodemon

## Endpoints

### Obtener todos los productos

GET /api/productos

### Obtener un producto por ID

GET /api/productos/:id

### Crear un producto

POST /api/productos

### Actualizar un producto

PUT /api/productos/:id

### Eliminar un producto

DELETE /api/productos/:id

## Ejemplo de producto

```json
{
  "nombre": "Mouse gamer",
  "descripcion": "Mouse RGB USB",
  "precio": 250,
  "stock": 8
}