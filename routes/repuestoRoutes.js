import { Router } from "express";
const router = Router();

import { register} from "../controllers/repuestoController.js";

router.post("/register", register)

export default router;