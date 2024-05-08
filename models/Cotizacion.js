import mongoose from "mongoose";

const cotizacionSchema = mongoose.Schema(
    {
        idCotizacion: {
            type: Number,
            required: true,
            trim: true,
        },
        detail: {
            type: String,
            required: true,
            trim: true,
        },
        image: {
            type: String,
            required: true,
            trim: true,
        },
        video: {
            type: String,
            required: true,
            trim: true,
        },
        imei: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
       
    },
    {
        timestamps: true,
    }
)

const Cotizacion = mongoose.model('Cotizacion', cotizacionSchema);
export default Cotizacion;