import mongoose from 'mongoose';

const equipoSchema = new mongoose.Schema({
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
  }
});

const Equipo = mongoose.model('Equipo', equipoSchema);

export default Equipo;