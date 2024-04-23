import { Router } from "express";
const router = Router();

import { autenticar } from "../controllers/usuarioController.js";

router.get("/", autenticar)

export default router;