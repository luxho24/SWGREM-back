import mongoose from "mongoose";
// models/Repuesto.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RepuestoSchema = new Schema({
    idProducto: { type: String, required: true, unique: true },
    descripcion: { type: String, required: true },
    precio: { type: Number, required: true },
    cantidad: { type: Number, required: true },
    idMarca: { type: String, required: true },
    modelo: { type: String, required: true }
});

module.exports = mongoose.model('Repuesto', RepuestoSchema);