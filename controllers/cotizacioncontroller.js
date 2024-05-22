import Cotizacion from "../models/Cotizacion.js";

const registerCotizacionVT = async (req, res) => {
    const { idCotizacion, detail, image, video, imei } = req.body;
    const existeCotizacion = await Cotizacion.findOne({ idCotizacion });

    // Comprobamos que el cotizacion exista en la base de datos
    if (existeCotizacion) {
        const error = new Error("La cotizacion ya existe");
        return res.status(400).json({ msg: error.message });
    }
    try {
        const cotizacion = new Cotizacion(req.body);
        const cotizacionGuardado = await cotizacion.save();
        console.log("Se registro la cotizacion");
        return res.status(200).json(cotizacionGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
};

const registerCotizacionVU = asyn(req,res) => {
    const {idCotizacion,marca,modelo,descripcion,precio} = req.body;
    const comprobanteCotizacion  = await Cotizacion.findOne({idCotizacion})

    if(comprobanteCotizacion) {
        const error = new Error("La cotizacion ya existe");
        return res.status(400).json({ msg: error.message});
    }
    try {
        const cotizacion = new Cotizacion(req.body);
        const cotizacionComprobada = await cotizacion.save();
        console.log("Se registro la cotizacion");
        return res.status(200).json(cotizacionComprobada);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }

};

const modificarCotizacionVU = asyn(req, res) => {
    const {idCotizacion, marca, modelo, descripcion, precio} = req.body;
    const existeCotizacion = await Cotizacion.findOne({ idCotizacion });

    if (existeCotizacion) {
        const error = new Error("La cotizacion ya existe");
        return res.status(400).json({ msg: error.message });
    }
    try {
        const cotizacion = new Cotizacion(req.body);
        const cotizacionGuardado = await cotizacion.save();
        console.log("Se registro la cotizacion");
        return res.status(200).json(cotizacionGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
};

export { registerCotizacionVT, registerCotizacionVU,modificarCotizacionVU};