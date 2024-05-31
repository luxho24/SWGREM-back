import Cotizacion from "../models/Cotizacion.js";

const registerCotizacion = async (req, res) => {
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

const registrarCotizacion = async (req,res) => {
    const {idCotizacion, marca, modelo, descripcion, precio} = req.body;
    const existeCotizacion  = await Cotizacion.findOne({idCotizacion})

    if(existeCotizacion) {
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

    const modificarCotizacion = async (req, res) => {
        const { idCotizacion, marca, modelo, descripcion, precio } = req.body;
        const {id} = req.params;
        const cotizar = await Cotizacion.findById( id );

        if (!cotizar) {
            const error = new Error("La cotización no existe");
            return res.status(404).json({ msg: error.message });
        }
        cotizar.idCotizacion = req.body.idCotizacion || cotizar.idCotizacion
        cotizar.detail = req.body.detail || cotizar.detail
        cotizar.image = req.body.image || cotizar.image
        cotizar.video = req.body.video || cotizar.video
        cotizar.imei = req.body.imei || cotizar.imei
        cotizar.cost = req.body.cost || cotizar.cost
        cotizar.state = req.body.state || cotizar.state
        cotizar.marca = req.body.marca || cotizar.marca
        cotizar.modelo = req.body.modelo || cotizar.modelo
        cotizar.descripcion = req.body.descripcion || cotizar.descripcion
        cotizar.precio = req.body.precio || cotizar.precio
        
        try {
            const cotizacionActualizada = await cotizar.save();
            console.log("Se modificó la cotización");
            return res.status(200).json(cotizacionActualizada);
        }catch (error) {
            return res.status(500).json({ msg: "Hubo un problema al modificar la cotización" });
        }
    };

const eliminarCotizacion = async (req, res) => {
    const { idCotizacion, marca, modelo, descripcion, precio } = req.body;
    const {id} = req.params;
    const coti = await Cotizacion.findById( id );

    // Comprobamos que la cotización exista en la base de datos
    if (!coti) {
        const error = new Error("La cotización no existe");
        return res.status(404).json({ msg: error.message });
    }

    try {
        // Eliminar la cotización
        await coti.deleteOne();
        console.log("Se eliminó la cotización");
        return res.status(200).json({ msg: "Cotización eliminada exitosamente" });
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al eliminar la cotización" });
    }
};

export { registerCotizacion, registrarCotizacion, modificarCotizacion, eliminarCotizacion};