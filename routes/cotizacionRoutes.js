import { Router } from "express";
const router = Router();

import { registerCotizacionVT, modificarCotizacionVU, registerCotizacionVU } from "../controllers/cotizacionController.js";

router.post("/registerCotizacionVT", registerCotizacionVT)
router.post("/registerCotizacionVU", registerCotizacionVU)
router.post("/modificarCotizacionVU", modificarCotizacionVU)

export default router;