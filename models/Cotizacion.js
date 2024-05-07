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
        consult: {
            type: String,
            required: true,
            trim: true
        }
    },
    {
        timestamps: true,
    }
)

const Cotizacion = mongoose.model('Cotizacion', cotizacionSchema);
export default Cotizacion;