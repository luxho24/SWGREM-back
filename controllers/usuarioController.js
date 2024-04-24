import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const register = async (req, res) => {
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne({ email });
    // Comprobamos que el usuario exista en la base de datos
    if (existeUsuario) {
        const error = new Error("El usuario ya esta registrado");
        return res.status(400).json({ msg: error.message });
    }

    try {
        // Registrar usuario
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();

        // Generar token
        const token = await generarJWT({ id: usuario._id, rol: usuario.rol })
        res.cookie("token", token);
        // res.json({ message: "Usuario creado satisfactoriamente" });
        res.status(200).json(usuarioGuardado);
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;
    // Comprobamos que el usuario exista en la base de datos
    const existeUsuario = await Usuario.findOne({ email });
    if (!existeUsuario) {
        const error = new Error("El usuario no existe");
        return res.status(400).json({ msg: error.message });
    }

    try {
        // Generar token
        // jwt.sign({ id:})

        return res
            .status(200)
            .json({ msg: "Usuario autenticado correctamente" });
    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
};

export { register, login };
