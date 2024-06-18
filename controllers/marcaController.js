import Marca from "../models/Marca.js";

const getAllMarcas = async (req, res) => {
    try {
        const marcas = await Marca.find();
        res.status(200).json(marcas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createMarca = async (req, res) => {
    const { marca, modelo, descripcion } = req.body;

    const newMarca = new Marca({
        marca,
        modelo,
        descripcion
    });

    try {
        const savedMarca = await newMarca.save();
        res.status(201).json(savedMarca);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateMarca = async (req, res) => {
    const { id } = req.params;
    const { marca, modelo, descripcion } = req.body;

    try {
        const updatedMarca = await Marca.findByIdAndUpdate(
            id,
            { marca, modelo, descripcion },
            { new: true }
        );
        res.status(200).json(updatedMarca);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteMarca = async (req, res) => {
    const { id } = req.params;

    try {
        await Marca.findByIdAndDelete(id);
        res.status(200).json({ message: 'Marca eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export {
    getAllMarcas,
    createMarca,
    updateMarca,
    deleteMarca
};