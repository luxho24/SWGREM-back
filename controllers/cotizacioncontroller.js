import Cotizacion from "../models/Cotizacion";

const registerCotizacion = async (req, res) => {
    const { idCotizacion, detail, image, video, imei } = req.body;
    const existeCotizacion = await Cotizacion.findOne({ idCotizacion });

    // Comprobamos que el usuario exista en la base de datos
    if (existeCotizacion) {
        const error = new Error("La cotizacion ya existe");
        return res.status(400).json({ msg: error.message });
    }

    // Comprobamos si las contraseñas coinciden
    if (password !== confirmPassword) {
        const error = new Error("Las contraseñas no coinciden");
        return res.status(400).json({ msg: error.message });
    }

    try {
        // Registrar usuario
        const cotizacion = new Cotizacion(req.body);
        const cotizacionGuardado = await Cotizacion.save();
        console.log("Se registro la cotizacion");
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
};
export { registerCotizacion };