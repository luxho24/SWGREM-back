import express from 'express';
const router = express.Router();
import {
  obtenerEquipos,
  registrarEquipo,
  modificarEquipo,
  eliminarEquipo,
  eliminarTodosLosEquipos
} from '../controllers/equipoController.js';

// Obtener todos los equipos
router.get('/', obtenerEquipos);

// Registrar un nuevo equipo
router.post('/', registrarEquipo);

// Modificar un equipo
router.put('/:id', modificarEquipo);

// Eliminar un equipo
router.delete('/:id', eliminarEquipo);

// Eliminar todos los equipos
router.delete('/', eliminarTodosLosEquipos);

export default router;