const express = require('express');
const router = express.Router();
const Marca = require('../models/Marca');

// POST request para crear una nueva marca
router.post('/marcas', async (req, res) => {
    const { marca, modelo, descripcion } = req.body;

    try {
        const nuevaMarca = new Marca({
            marca,
            modelo,
            descripcion
        });

        const marcaGuardada = await nuevaMarca.save();

        res.json({
            status: 'success',
            data: marcaGuardada
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router;