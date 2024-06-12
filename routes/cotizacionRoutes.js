import { Router } from "express";
const router = Router();

import {registerCotizacion, modificarCotizacion, eliminarCotizacion, listadoCotizacion, carritoDeCompras} from "../controllers/cotizacionController.js";

router.post("/registerCotizacion", registerCotizacion)
router.put("/modificarCotizacion/:id", modificarCotizacion)
router.delete("/eliminarCotizacion/:id", eliminarCotizacion)
router.get("/listadoCotizacion/:id", listadoCotizacion)

export default router;