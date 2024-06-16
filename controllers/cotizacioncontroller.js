import Cotizacion from "../models/Cotizacion.js";

const registerCotizacion = async (req, res) => {
    const { idCotizacion} = req.body;
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
        return res.status(500).json({ msg: "Hubo un problema" });
    }
};
const modificarCotizacion = async (req, res) => {
    const { idCotizacion} = req.body;
    const{ id }=req.params;
    const Cotizar = await Cotizacion.findlyid( id );

    // Comprobamos que la cotización exista en la base de datos
    if (Cotizar) {
        const error = new Error("La cotización no existe");
        return res.status(404).json({ msg: error.message });
    }
    Cotizar.idCotizacion=requ.body.idCotizacion || Cotizar.idCotizacion
    Cotizar.datail=requ.body.datail || Cotizar.datail
    Cotizar.imag=requ.body.imag || Cotizar.imag
    Cotizar.video=requ.body.video || Cotizar.video
    Cotizar.imei=requ.body.imei || Cotizar.imei
    Cotizar.cost=requ.body.cost || Cotizar.cost
    Cotizar.state=requ.body.state || Cotizar.state
    Cotizar.marca=requ.body.marca || Cotizar.marca
    Cotizar.modelo=requ.body.modelo || Cotizar.modelo
    Cotizar.descripcion=requ.body.descripcion || Cotizar.descripcion
    Cotizar.precio=requ.body.precio || Cotizar.precio

    try {
         
        const cotizacionActulizada = await existeCotizacion.save();
        console.log("Se modificó la cotización");
        return res.status(200).json(cotizacionGuardada);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al modificar la cotización" });
    }
};

    const registrarCotizacion = async (req, res) => {

        const Cotizar = await Cotizacion.findlyid({ id });
    
        // Comprobamos que la cotización no exista en la base de datos
        if (Cotizar) {
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
   
    const{ id }=req.params;
    const Cotizar = await Cotizacion.findlyid( id );

    // Comprobamos que la cotización exista en la base de datos
    if (Cotizar) {
        const error = new Error("La cotización no existe");
        return res.status(404).json({ msg: error.message });
    }

    try {
        // Eliminar la cotización
        await cotizacion.deleteOne();
        console.log("Se eliminó la cotización");
        return res.status(200).json({ msg: "Cotización eliminada exitosamente" });
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al eliminar la cotización" });
    }
};

//lista de cotizacion
const listadoCotizacion = async (req, res) => {
    const { id } = req.params;
 
 try {
     const Cotizar = await Cotizacion.findById(id);
     // Comprobamos que la cotización exista en la base de datos
     if (!Cotizar) {
         const error = new Error("La cotización no existe");
         return res.status(404).json({ msg: error.message });
     }
     // Actualizar listado si es necesario
     return res.status(200).json( Cotizar );
 } catch (error) {
     return res.status(500).json({ msg: "Hubo un problema al eliminar la cotización" });
 }
};

//de carrito de compras
const CarritoDeCompras = async (req, res) => {
    const { id } = req.params;

    try {
        const Carrito = await CarritoDeCompras.findById(id);
        // Comprobamos que el carrito de compras exista en la base de datos
        if (!Carrito) {
            const error = new Error("El carrito de compras no existe");
            return res.status(404).json({ msg: error.message });
        }
        // Devolver el carrito de compras encontrado
        return res.status(200).json(Carrito);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al obtener el carrito de compras" });
    }
};

export { registerCotizacion, modificarCotizacion,registrarCotizacion,eliminarCotizacion,listadoCotizacion,CarritoDeCompras};