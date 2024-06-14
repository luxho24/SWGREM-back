// models/Repuesto.js

import mongoose from 'mongoose';

const repuestoSchema = mongoose.Schema({
    idProducto: {
        type: String,
        required: true,
        unique: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    idMarca: {
        type: String,
        required: true
    },
    modelo: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const Repuesto = mongoose.model('Repuesto', repuestoSchema);

export default Repuesto;