import Marca from "../models/Marca.js";

const registrarEquipo = async (req, res) => {
    const { marca, modelo, descripcion } = req.body;

    try {
        const nuevoEquipo = new Equipo({ marca, modelo, descripcion });
        const equipoGuardado = await nuevoEquipo.save();
        return res.status(200).json(equipoGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
}

const getEquipos = async (req, res) => {
    const equipos = await Equipo.find();
    return res.status(200).json(equipos);
}

const getEquipoById = async (req, res) => {
    const equipo = await Equipo.findById(req.params.id);
    return res.status(200).json(equipo);
}

const actualizarEquipo = async (req, res) => {
    const { marca, modelo, descripcion } = req.body;
    const equipo = await Equipo.findByIdAndUpdate(req.params.id, { marca, modelo, descripcion }, { new: true });
    return res.status(200).json(equipo);
}

const eliminarEquipo = async (req, res) => {
    await Equipo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Equipo eliminado" });
}

export { registrarEquipo, getEquipos, getEquipoById, actualizarEquipo, eliminarEquipo };