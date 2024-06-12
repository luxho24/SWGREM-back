import NMarca from "../models/marca.js";

// GET - Listar todas las marcas
const listarMarcas = async (req, res) => {
    try {
        const marcas = await NMarca.find();
        return res.status(200).json(marcas);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al listar las marcas" });
    }
};

// GET - Obtener una marca por ID
const obtenerMarcaId = async (req, res) => {
    try {
        const marca = await NMarca.findById(req.params.id);
        if (!marca) {
            return res.status(404).json({ msg: "Marca no encontrada" });
        }
        return res.status(200).json(marca);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al obtener la marca" });
    }
};

// POST - Registrar una nueva marca
const registrarMarca = async (req, res) => {
    try {
        const { Marca, Modelo } = req.body;

        const nuevaMarca = new NMarca({
            Marca,
            Modelo,
        });

        const marcaGuardada = await nuevaMarca.save();

        return res.status(201).json(marcaGuardada);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al registrar la marca" });
    }
};

// PUT - Modificar una marca por ID
const modificarMarca = async (req, res) => {
    try {
        const { Marca, Modelo } = req.body;
        const marca = await NMarca.findById(req.params.id);

        if (!marca) {
            return res.status(404).json({ msg: "Marca no encontrada" });
        }

        marca.Marca = Marca || marca.Marca;
        marca.Modelo = Modelo || marca.Modelo;

        const marcaActualizada = await marca.save();
        return res.status(200).json(marcaActualizada);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al modificar la marca" });
    }
};

// DELETE - Eliminar una marca por ID
const eliminarMarca = async (req, res) => {
    try {
        const marca = await NMarca.findById(req.params.id);

        if (!marca) {
            return res.status(404).json({ msg: "Marca no encontrada" });
        }

        await marca.deleteOne();
        return res.status(200).json({ msg: "Marca eliminada exitosamente" });
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al eliminar la marca" });
    }
};

export { listarMarcas, obtenerMarcaId, registrarMarca, modificarMarca, eliminarMarca };
