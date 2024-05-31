import { Router } from "express";
const router = Router();

import {registerCotizacion, modificarCotizacion, eliminarCotizacion} from "../controllers/cotizacionController.js";

router.post("/registerCotizacion", registerCotizacion)
router.put("/modificarCotizacion/:id", modificarCotizacion)
router.delete("/eliminarCotizacion/:id", eliminarCotizacion)

export default router;