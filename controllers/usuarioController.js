import User from "../models/Usuario.js";

const autenticar = (req, res) => {
    return res.status(200).json({msg: "Usuario autenticado correctamente"})
}

export {
    autenticar
}