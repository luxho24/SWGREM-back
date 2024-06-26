import Cotizacion from "../models/Cotizacion.js";

const register = async (req, res) => {
    try {
        const { brand, model, selectedProblems, otherProblem, descriptionProblem, name, email, phone } = req.body;
        const foto = req.files['foto'] ? req.files['foto'][0].path : null;
        const video = req.files['video'] ? req.files['video'][0].path : null;
    
        const nuevaCotizacion = new Cotizacion({
          brand,
          model,
          selectedProblems,
          otherProblem,
          descriptionProblem,
          name,
          email,
          phone,
          foto,
          video
        });
    
        await nuevaCotizacion.save();
        res.status(201).json(nuevaCotizacion);
      } catch (error) {
        res.status(500).json({ message: error.message });
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