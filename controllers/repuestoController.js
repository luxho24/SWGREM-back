import Repuesto from "../models/Piezas.js";

// Registro de un nuevo repuesto
const registerRepuestos = async (req, res) => {
    const repuesto = new Repuesto(req.body);
    try {
        const repuestoGuardado = await repuesto.save();
        return res.status(200).json(repuestoGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un  al registrar" });
    }
}

// Mostrar los repuestos
const getRepuestos = async (req, res) => {
    const repuestos = await Repuesto.find();
    return res.status(200).json(repuestos);
}

// Actualizar
const updateRepuesto = async (req, res) => {
    const repuesto = await Repuesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(repuesto);
}

// Eliminar
const deleteRepuesto = async (req, res) => {
    await Repuesto.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Repuestos eliminado" });
}

// Exportar las funciones
export { registerRepuestos, getRepuestos, updateRepuesto, deleteRepuesto };
