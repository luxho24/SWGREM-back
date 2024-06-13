import mongoose from "mongoose";

const carritoSchema = mongoose.Schema(
    {
        idRepuesto:{
            type: Number,
            required: true,
            trim: true,
        },
        descripcionRep:{
            type: String,
            required: true,
            trim: true,
        },
        precioRep:{
            type: Number,
            required: true,
            trim: true,
        },
        cantidadRep:{
            type: Number,
            required: true,
            trim: true,
        },
        idMarca:{
            type: Number,
            required: true,
            trim: true,
        }
    },
    {
        timestamps: true,
    }
)

const Carrito = mongoose.model('Carrito', carritoSchema);
export default Carrito;