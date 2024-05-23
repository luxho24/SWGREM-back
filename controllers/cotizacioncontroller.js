import Cotizacion from "../models/Cotizacion.js";

const registerCotizacion = async (req, res) => {
    const { idCotizacion, detail, image, video, imei } = req.body;
    const existeCotizacion = await Cotizacion.findOne({ idCotizacion });

    // Comprobamos que el usuario exista en la base de datos
    if (existeCotizacion) {
        const error = new Error("La cotizacion ya existe");
        return res.status(400).json({ msg: error.message });
    }
    try {
        // Registrar usuario
        const cotizacion = new Cotizacion(req.body);
        const cotizacionGuardado = await cotizacion.save();
        console.log("Se registro la cotizacion");
        return res.status(200).json(cotizacionGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    } 

};
const modificarCotizacion = async (req, res) => {
    const { idCotizacion, marca, modelo, descripcion, precio } = req.body;
    const existeCotizacion = await Cotizacion.findOne({ idCotizacion });

    // Comprobamos que la cotización exista en la base de datos
    if (!existeCotizacion) {
        const error = new Error("La cotización no existe");
        return res.status(404).json({ msg: error.message });
    }

    try {
        // Actualizar la cotización
        existeCotizacion.marca = marca;
        existeCotizacion.modelo = modelo;
        existeCotizacion.descripcion = descripcion;
        existeCotizacion.precio = precio;

        const cotizacionGuardada = await existeCotizacion.save();
        console.log("Se modificó la cotización");
        return res.status(200).json(cotizacionGuardada);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al modificar la cotización" });
    }
};

    const registrarCotizacion = async (req, res) => {
        const { idCotizacion, detail, image, video, imei } = req.body;
        const existeCotizacion = await Cotizacion.findOne({ idCotizacion });
    
        // Comprobamos que la cotización no exista en la base de datos
        if (existeCotizacion) {
            const error = new Error("La cotización ya existe");
            return res.status(400).json({ msg: error.message });
        }
    
        try {
            // Registrar la cotización
            const cotizacion = new Cotizacion(req.body);
            const cotizacionGuardado = await cotizacion.save();
            console.log("Se registró la cotización");
            return res.status(200).json(cotizacionGuardado);
        } catch (error) {
            return res.status(500).json({ msg: "Hubo un problema al registrar la cotización" });
        }
    };
    
    
const eliminarCotizacion = async (req, res) => {
    const { idCotizacion, detail, image, video, imei } = req.body;
    const existeCotizacion = await Cotizacion.findOne({ idCotizacion });

    // Comprobamos que la cotización exista en la base de datos
    if (!existeCotizacion) {
        const error = new Error("La cotización no existe");
        return res.status(404).json({ msg: error.message });
    }

    try {
        // Eliminar la cotización
        await existeCotizacion.remove();
        console.log("Se eliminó la cotización");
        return res.status(200).json({ msg: "Cotización eliminada exitosamente" });
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al eliminar la cotización" });
    }
};
