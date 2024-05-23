import { Router } from "express";
const router = Router();

import { registerCotizacion } from "../controllers/cotizacioncontroller.js";

router.post("/registerCotizacion", registerCotizacion)
router.post("/modificarCotizacion", modificarCotizacion)
router.post("/registrarCotizacion", registrarCotizacion)
router.post("/eliminarCotizacion", eliminarCotizacion)

export default router;