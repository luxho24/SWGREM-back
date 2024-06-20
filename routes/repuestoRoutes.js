import { Router } from "express";
const router = Router();

import { deleteRepuesto, getRepuestos, registerRepuestos, updateRepuesto } from "../controllers/repuestoController.js"

router.post("/registrarRepuesto", registerRepuestos)
router.get("/mostrarRepuesto:id", getRepuestos)
router.put("/actualizarRepuesto:id", updateRepuesto)
router.delete("/eliminarRepuesto:id", deleteRepuesto)

export default router;