import { Router } from "express";
const router = Router();

import{ modificarCarrito, registerCarrito } from "../controllers/carritocompraController.js"

router.post("/registerCarrito", registerCarrito)
router.put("/modificarRegistro", modificarCarrito)


export default router;