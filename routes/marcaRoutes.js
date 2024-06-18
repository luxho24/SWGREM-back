import express from 'express';
import {
    getAllMarcas,
    createMarca,
    updateMarca,
    deleteMarca
} from '../controllers/marcaController.js';

const router = express.Router();

router.get('/', getAllMarcas);
router.post('/', createMarca);
router.put('/:id', updateMarca);
router.delete('/:id', deleteMarca);

export default router;