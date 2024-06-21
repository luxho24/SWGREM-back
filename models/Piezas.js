import mongoose from "mongoose";

const piezasSchema = mongoose.Schema(
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

const Piezas = mongoose.model('Piezas', piezasSchema);
export default Piezas;



