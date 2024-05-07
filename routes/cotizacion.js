import { Router } from "express";
const router = Router();

import Cotizacion from "../models/Cotizacion.js";

router.post("/cotizacion", Cotizacion)

export default router;