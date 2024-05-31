const express = require('express');
const router = express.Router();

// Recibir los datos del equipo desde brand-dashboard.jsx
router.post('/marcas', (req, res) => {
    const { marca, modelo, descripcion } = req.body;

    // Aquí puedes manejar los datos recibidos, por ejemplo, guardándolos en una base de datos.
    // Por ahora, solo los devolveremos en la respuesta.

    res.json({
        status: 'success',
        data: {
            marca,
            modelo,
            descripcion
        }
    });
});

module.exports = router;