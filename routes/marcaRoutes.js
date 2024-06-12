import { Router } from "express";
import { listarMarcas, obtenerMarcaId, registrarMarca, modificarMarca, eliminarMarca } from "../controllers/marcaController.js";
const router = Router();

// Ruta para listar todas las marcas
router.get('/Listar', listarMarcas);

// Ruta para obtener una marca por ID
router.get('/ListarId/:id', obtenerMarcaId);

// Ruta para registrar una nueva marca
router.post('/Registrar', registrarMarca);

// Ruta para modificar una marca por ID
router.put('/ModificarId/:id', modificarMarca);

// Ruta para eliminar una marca por ID
router.delete('/Eliminar/:id', eliminarMarca);

export default router;

