import { Router } from "express";
const router = Router();

import { registerCotizacionVT, registerCotizacionVU, eliminarCotizacion, modificarCotizacion } from "../controllers/cotizacionController.js";

router.post("/registerCotizacionVT", registerCotizacionVT)
router.post("/registerCotizacionVU", registerCotizacionVU)
router.post("/modificarCotizacionVU", modificarCotizacion)
router.post("/eliminarCotizacionVU", eliminarCotizacion)
export default router;