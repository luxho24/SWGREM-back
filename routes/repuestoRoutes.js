// routes/repuestosRoutes.js

const express = require('express');
const router = express.Router();
const {
    getAllRepuestos,
    createRepuesto,
    updateRepuesto,
    deleteRepuesto
} = require('../controllers/repuestosController');

router.get('/', getAllRepuestos);
router.post('/', createRepuesto);
router.put('/:idProducto', updateRepuesto);
router.delete('/:idProducto', deleteRepuesto);

module.exports = router;