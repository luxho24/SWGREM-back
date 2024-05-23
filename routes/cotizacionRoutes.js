import { Router } from "express";
const router = Router();

import {registerCotizacion, registrarCotizacion, modificarCotizacion, eliminarCotizacion} from "../controllers/cotizacionController.js";

router.post("/registerCotizacion", registerCotizacion)
router.post("/registrarCotizacion", registrarCotizacion)
router.post("/modificarCotizacion", modificarCotizacion)
router.post("/eliminarCotizacion", eliminarCotizacion)

export default router;