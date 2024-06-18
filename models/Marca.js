import mongoose from 'mongoose';

const marcaSchema = mongoose.Schema({
    marca: {
        type: String,
        required: true,
    },
    modelo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
});

const Marca = mongoose.model('Marca', marcaSchema);

export default Marca;