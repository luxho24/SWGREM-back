<<<<<<< Updated upstream
export const registrarMarca = (req, res) => {
  const { marca, modelo, descripcion } = req.body;

  // Verificar que todos los campos están presentes
  if (!marca || !modelo || !descripcion) {
      return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  // Aquí manejas la lógica para almacenar los datos recibidos
  // Ejemplo: Guardar en la base de datos
  // const nuevaMarca = new Marca({ marca, modelo, descripcion });
  // nuevaMarca.save();

  res.json({ message: 'Datos de la marca recibidos correctamente' });
};

// Implementa las otras funciones según sea necesario
export const obtenerMarcas = (req, res) => {
  // Lógica para obtener todas las marcas
};

export const modificarMarca = (req, res) => {
  // Lógica para modificar una marca
};

export const eliminarMarca = (req, res) => {
  // Lógica para eliminar una marca
};

export const eliminarTodasLasMarcas = (req, res) => {
  // Lógica para eliminar todas las marcas
};
=======
import Equipo from "../models/Equipo.js"; // Asumiendo que tienes un modelo Equipo

const registrarEquipo = async (req, res) => {
    const { marca, modelo, descripcion } = req.body;

    try {
        const nuevoEquipo = new Equipo({ marca, modelo, descripcion });
        const equipoGuardado = await nuevoEquipo.save();
        return res.status(200).json(equipoGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
}

const getEquipos = async (req, res) => {
    const equipos = await Equipo.find();
    return res.status(200).json(equipos);
}

const getEquipoById = async (req, res) => {
    const equipo = await Equipo.findById(req.params.id);
    return res.status(200).json(equipo);
}

const actualizarEquipo = async (req, res) => {
    const { marca, modelo, descripcion } = req.body;
    const equipo = await Equipo.findByIdAndUpdate(req.params.id, { marca, modelo, descripcion }, { new: true });
    return res.status(200).json(equipo);
}

const eliminarEquipo = async (req, res) => {
    await Equipo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Equipo eliminado" });
}

export { registrarEquipo, getEquipos, getEquipoById, actualizarEquipo, eliminarEquipo };
>>>>>>> Stashed changes
