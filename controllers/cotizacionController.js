import Cotizacion from "../models/Cotizacion.js";

const register = async (req, res) => {
    const cotizacion = new Cotizacion(req.body);
    try {
        const cotizacionGuardada = await cotizacion.save();
        return res.status(200).json(cotizacionGuardada);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
}

const getCotizaciones = async (req, res) => {
    const cotizaciones = await Cotizacion.find();
    return res.status(200).json(cotizaciones);
}

const getCotizacionById = async (req, res) => {
    const cotizacion = await Cotizacion.findById(req.params.id);
    return res.status(200).json(cotizacion);
}

const updateCotizacion = async (req, res) => {
    const cotizacion = await Cotizacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(cotizacion);
}

const deleteCotizacion = async (req, res) => {
    await Cotizacion.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Cotizacion eliminada" });
}

export { register, getCotizaciones, getCotizacionById, updateCotizacion, deleteCotizacion };