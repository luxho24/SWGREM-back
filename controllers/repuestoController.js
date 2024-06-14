// controllers/repuestosController.js

const Repuesto = require('../models/Repuesto.js');

exports.getAllRepuestos = async (req, res) => {
    try {
        const repuestos = await Repuesto.find();
        res.status(200).json(repuestos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createRepuesto = async (req, res) => {
    const { idProducto, descripcion, precio, cantidad, idMarca, modelo } = req.body;

    const newRepuesto = new Repuesto({
        idProducto,
        descripcion,
        precio,
        cantidad,
        idMarca,
        modelo
    });

    try {
        const savedRepuesto = await newRepuesto.save();
        res.status(201).json(savedRepuesto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateRepuesto = async (req, res) => {
    const { idProducto } = req.params;
    const { descripcion, precio, cantidad, idMarca, modelo } = req.body;

    try {
        const updatedRepuesto = await Repuesto.findOneAndUpdate(
            { idProducto },
            { descripcion, precio, cantidad, idMarca, modelo },
            { new: true }
        );
        res.status(200).json(updatedRepuesto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteRepuesto = async (req, res) => {
    const { idProducto } = req.params;

    try {
        await Repuesto.findOneAndDelete({ idProducto });
        res.status(200).json({ message: 'Repuesto eliminado con éxito' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};