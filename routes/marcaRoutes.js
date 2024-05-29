import express from 'express';
const router = express.Router();
import {
  obtenerMarcas,
  registrarMarca,
  modificarMarca,
  eliminarMarca,
  eliminarTodasLasMarcas
} from '../controllers/marcaController.js';

// Obtener todas las marcas
router.get('/', obtenerMarcas);

// Registrar una nueva marca
router.post('/', registrarMarca);

// Modificar una marca
router.put('/:id', modificarMarca);

// Eliminar una marca
router.delete('/:id', eliminarMarca);

// Eliminar todas las marcas
router.delete('/', eliminarTodasLasMarcas);

export default router;