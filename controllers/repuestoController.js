import Repuesto from "../models/Piezas.js";

const registerRepuestos = async (req, res) => {
    const repuesto = new Repuesto(req.body);
    try {
        const repuestoGuardado = await repuesto.save();
        return res.status(200).json(repuestoGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un error al registrar" });
    }
}

const getRepuestos = async (req, res) => {
    const repuestos = await Repuesto.find();
    return res.status(200).json(repuestos);
}

const updateRepuesto = async (req, res) => {
    const repuesto = await Repuesto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(repuesto);
}

const deleteRepuesto = async (req, res) => {
    await Repuesto.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Repuestos eliminado" });
}

export { registerRepuestos, getRepuestos, updateRepuesto, deleteRepuesto };
