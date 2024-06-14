// routes/repuestoRoutes.js

import express from 'express';
import {
    getAllRepuestos,
    createRepuesto,
    updateRepuesto,
    deleteRepuesto
} from '../controllers/repuestoController.js';

const router = express.Router();

router.get('/', getAllRepuestos);
router.post('/', createRepuesto);
router.put('/:idProducto', updateRepuesto);
router.delete('/:idProducto', deleteRepuesto);

export default router;