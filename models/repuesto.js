import mongoose from "mongoose";

const repuestoSchema = mongoose.Schema(
    {
        idRepuesto: {
            type: Number,
            required: true,
            trim: true,
        },
        descripcion: {
            type: String,
            required: true,
            trim: true,
        },
        precio: {
            type: Number,
            required: true,
            trim: true,
        },
        cantidad: {
            type: Number,
            required: true,
            trim: true,
        },
        marca: {
            type: String,
            required: true,
            trim: true,
        },
        modelo: {
            type: String,
            required: true,
            trim: true,
        },
    },

    {
        timestamps: true,
    }
)

// Exportacion del Schema
const Repuesto = mongoose.model('Repuesto', repuestoSchema);
export default Repuesto;