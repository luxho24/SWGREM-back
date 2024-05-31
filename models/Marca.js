import mongoose from 'mongoose';

const marcaSchema = new mongoose.Schema({
  nombre: {
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
  },
  sitioWeb: {
    type: String,
    required: false
  },
  contacto: {
    email: {
      type: String,
      required: true
    },
    telefono: {
      type: String,
      required: false
    }
  }
});

const Marca = mongoose.model('Marca', marcaSchema);

export default Marca;