import { Router } from "express";
const router = Router();

import { registerCotizacion } from "../controllers/cotizacioncontroller.js";

router.post("/registerCotizacion", registerCotizacion)

export default router;