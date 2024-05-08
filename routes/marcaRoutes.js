import { Router } from "express";
const router = Router();

import { registrarMarca } from "../controllers/marcaController.js";

router.post("/registrar", registrarMarca);

export default router;
