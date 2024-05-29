import Marca from '../models/marca.js';

// Obtener todas las marcas
export const obtenerMarcas = async (req, res) => {
  try {
    const marcas = await Marca.find();
    res.json(marcas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las marcas' });
  }
};

// Registrar una nueva marca
export const registrarMarca = async (req, res) => {
  const { nombre, descripcion } = req.body;
  const nuevaMarca = new Marca({ nombre, descripcion });

  try {
    await nuevaMarca.save();
    res.status(201).json(nuevaMarca);
  } catch (err) {
    res.status(400).json({ error: 'Error al registrar la marca' });
  }
};

// Modificar una marca
export const modificarMarca = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;

  try {
    const marcaActualizada = await Marca.findByIdAndUpdate(id, { nombre, descripcion }, { new: true });
    res.json(marcaActualizada);
  } catch (err) {
    res.status(400).json({ error: 'Error al modificar la marca' });
  }
};

// Eliminar una marca
export const eliminarMarca = async (req, res) => {
  const { id } = req.params;

  try {
    await Marca.findByIdAndDelete(id);
    res.json({ message: 'Marca eliminada' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar la marca' });
  }
};

// Eliminar todas las marcas
export const eliminarTodasLasMarcas = async (req, res) => {
  try {
    await Marca.deleteMany();
    res.json({ message: 'Todas las marcas han sido eliminadas' });
  } catch (err) {
    res.status(400).json({ error: 'Error al eliminar todas las marcas' });
  }
};