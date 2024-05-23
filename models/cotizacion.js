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
        cost:{
            type: String,
            required: true,
            trim: true,
        },
        state:{
            type: String,
            required: true,
            trim: true,
        },
        marca: {
            type: String,
            required: true,
            trim: true
        },
        modelo: {
            type: String,
            required: true,
            trim: true
        },
        descripcion: {
            type: String,
            required: true
        },
        precio: {
            type: Number,
            required: true
        },
    },
    {
        timestamps: true,
    }
)

// Exportacion del Schema
const cotizacion = mongoose.model('Cotizar', cotizacionSchema);
export default cotizacion;