import { Router } from "express";
const router = Router();

import { register, login, verificarToken, perfil } from "../controllers/usuarioController.js";
import authMiddleware from "../middleware/authMiddleware.js";

router.post("/register", register)
router.post("/login", login)
router.get("/perfil", authMiddleware, perfil)
router.get("/verificar-token", authMiddleware, verificarToken);

export default router;