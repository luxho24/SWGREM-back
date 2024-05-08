import mongoose from "mongoose";

const cotizacionSchema = mongoose.Schema(
    {
        idCotizacion: {
            type: String,
            required: true,
            unique: true,
            
        },
        detail: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        imag: {
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
            trim:true,
        },
       
    },
    {
        timestamps: true,
    }
)

// Exportacion del Schema
const cotizacion = mongoose.model('Cotizar', cotizacionSchema);
export default cotizacion;