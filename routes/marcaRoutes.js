import { Router } from "express";
const router = Router();

import {
    registrarEquipo,
    obtenerEquipos,
    obtenerEquipoPorId,
    actualizarEquipo,
    eliminarEquipo,
    eliminarTodosLosEquipos
} from "../controllers/marcaController.js";
import authMiddleware from "../middleware/authMiddleware.js";

// Ruta para registrar un nuevo equipo
router.post("/registrar", registrarEquipo);

// Ruta para obtener todos los equipos registrados
router.get("/equipos", authMiddleware, obtenerEquipos);

// Ruta para obtener un equipo por su ID
router.get("/equipos/:id", authMiddleware, obtenerEquipoPorId);

// Ruta para actualizar un equipo existente
router.put("/equipos/:id", authMiddleware, actualizarEquipo);

// Ruta para eliminar un equipo
router.delete("/equipos/:id", authMiddleware, eliminarEquipo);

// Ruta para eliminar todos los equipos registrados
router.delete("/equipos", authMiddleware, eliminarTodosLosEquipos);

export default router;