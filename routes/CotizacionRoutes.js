import { Router } from "express";
const router = Router();


import { registerCotizacionVT, modificarCotizacionVU, registerCotizacionVU } from "../controllers/cotizacioncontroller.js";

import { registerCotizacion,modificarCotizacion,registrarCotizacion,eliminarCotizacion} from "../controllers/cotizacioncontroller.js";


router.post("/registerCotizacionVT", registerCotizacionVT)
router.post("/registerCotizacionVU", registerCotizacionVU)
router.post("/modificarCotizacionVU", modificarCotizacionVU)

export default router;