import Carrito from "../models/Piezas.js";

const registerCarrito = async (req, res) => {
    const {idrepuesto} = req.body;
    const existeRep = await repuestos.findOne({ idRepuesto});

        if(existeRep) {
            const error = new Error("El registro de estas piezas ya existe");
            return res.status(400).json({msg: error.message});
        }
        try {
            const repuestos = new repuestos(req.body);
            const carritoNew = await repuestos.save();
            console.log("Se registro la cotizacion");
            return res.status(200).json(carritoNew);
        } catch (error) {
            return res.status(500).json({ msg: "Hubo un problema al registrar" });
        }
};
const modificarCarrito = async (req, res) => {
    const {idRepuesto} = req.params;
    const repuestos = await repuestos.findById( idrepuesto );

    if (!repuestos) {
        const error = new Error("No existe ese registro de piezas");
        return res.status(404).json({ msg: error.message });
    }
    repuestos.idRepuesto = req.body.idRepuesto || repuestos.idRepuesto
    repuestos.Marca = req.body.Marca || repuestos.Marca
    repuestos.Modelo = req.body.Modelo || repuestos.Modelo
    repuestos.descripcionRep = req.body.descripcionRep || repuestos.descripcionRep
    repuestos.precioRep = req.body.precioRep || repuestos.precioRep
    repuestos.cantidadRep = req.body.cantidadRep || repuestos.cantidadRep
    
    
    try {
        const carritoActualizado = await repuestos.save();
        console.log("Se modificó el guardado de piezas registradas");
        return res.status(200).json(carritoActualizado);
    }catch (error) {
        return res.status(500).json({ msg: "Hubo un problema en el guardado de piezas registradas" });
    }
};
const eliminarCarrito = async (req, res) => {
    const { idRepuesto } = req.params;

    try {
        const repuesto = await repuestos.findOneAndDelete({ idRepuesto });

        if (!repuesto) {
            const error = new Error("No se encontró el registro de piezas");
            return res.status(404).json({ msg: error.message });
        }

        console.log("Se eliminó el registro de piezas");
        return res.status(200).json({ msg: "Registro de piezas eliminado correctamente" });
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al eliminar el registro de piezas" });
    }
};
export { registerCarrito, modificarCarrito,eliminarCarrito };