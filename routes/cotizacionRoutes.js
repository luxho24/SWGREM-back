import express from 'express';
const router = express.Router();
import { registrarMarca, obtenerMarcas, modificarMarca, eliminarMarca, eliminarTodasLasMarcas } from '../controllers/marcaController.js';

router.post('/', registrarMarca);  // Ruta para registrar una nueva marca
router.get('/', obtenerMarcas);    // Ruta para obtener todas las marcas
router.put('/:id', modificarMarca); // Ruta para modificar una marca
router.delete('/:id', eliminarMarca); // Ruta para eliminar una marca
router.delete('/', eliminarTodasLasMarcas); // Ruta para eliminar todas las marcas

export default router;