import mongoose from "mongoose";

const cotizacionSchema = mongoose.Schema(
    {
        brand: {
            type: String,
            required: true,
            trim: true,
        },
        model: {
            type: String,
            required: true,
            trim: true,
        },
        selectedProblems: {
            type: [String],
            required: true,
        },
        otherProblem: {
            type: String,
            trim: true,
            default: "-",
        },
        descriptionProblem: {
            type: String,
            trim: true,
            default: "-",
        },
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
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
const Cotizacion = mongoose.model('Cotizacion', cotizacionSchema);
export default Cotizacion;