import mongoose from 'mongoose';

const marcaSchema = new mongoose.Schema({
  marca: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  fechaCreacion: {
    type: Date,
    required: true,
    default: Date.now
  }
});

const Marca = mongoose.model('Marca', marcaSchema);

export default Marca;