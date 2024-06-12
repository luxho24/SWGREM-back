import { Router } from "express";
const router = Router();

import { register, getCotizaciones } from "../controllers/cotizacionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", register)
router.get("/getCotizaciones", authMiddleware, getCotizaciones);

export default router;