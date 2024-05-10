import Marca from "../models/marca.js";

const registrarMarca = async (req, res) => {
    try {
        const { nameMar, ModelMar } = req.body;

        const nuevaMarca = new Marca({
            nameMar,
            ModelMar,
        });

        const marcaGuardada = await nuevaMarca.save();

        return res.status(201).json(marcaGuardada);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema al registrar la marca" });
    }
};

export { registrarMarca };