import { Router } from "express";
const router = Router();

import {registerCotizacion, registrarCotizacion, modificarCotizacion, eliminarCotizacion} from "../controllers/cotizacionController.js";

router.post("/registerCotizacion", registerCotizacion)
router.post("/registrarCotizacion", registrarCotizacion)
router.put("/modificarCotizacion/:id", modificarCotizacion)
router.delete("/eliminarCotizacion/:id", eliminarCotizacion)

export default router;