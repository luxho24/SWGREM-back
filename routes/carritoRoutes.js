import { Router } from "express";
const router = Router();

import { createCarrito, deleteCarrito, getCarrito, updateCarrito } from "../controllers/carritoController.js"

router.post("/registerCarrito", createCarrito)
router.get("/mostrarCarrito", getCarrito)
router.put("/actualizarCarrito/:id", updateCarrito)
router.delete("/eliminarCarrito/:id", deleteCarrito)

export default router;