import { Router } from "express";
const router = Router();

import {registerCotizacion, modificarCotizacion,registrarCotizacion,eliminarCotizacion} from "../controllers/cotizacioncontroller.js";

router.post("/registerCotizacion", registerCotizacion)
router.post("/modificarCotizacion/:id", modificarCotizacion)
router.put("/registrarCotizacion/:id", registrarCotizacion)
router.delete("/eliminarCotizacion", eliminarCotizacion)

export default router;