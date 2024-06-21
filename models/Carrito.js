import mongoose from "mongoose";

const carritoSchema = moongose.Schema(
    {
        idProduct:{
            type: Number,
            required: true,
            trim: true,
        },
        nameProduct:{
            type: Number,
            required: true,
            trim: true,
        },
        description:{
            type: Number,
            required: true,
            trim: true,
        },
        quantity:{
            type: Number,
            required: true,
            trim: true,
        },
        price:{
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