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
        cost:{
            type:Number,
            required: true,
            trim: true,
        },
        state:{
            type:String,
            required: true,
            trim: true,
        },marca:{
            type:String,
            required: true,
            trim: true,
        },modelo:{
            type:String,
            required: true,
            trim: true,
        },descripcion:{
            type:String,
            required: true,
            trim: true,
        },precio:{
            type:Number,
            required: true,
            trim: true,
        },
       
    },
    {
        timestamps: true,
    }
)

const Cotizacion = mongoose.model('Cotizacion', cotizacionSchema);
export default Cotizacion;