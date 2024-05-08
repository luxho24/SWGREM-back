import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const register = async (req, res) => {
    const { email, password, confirmPassword } = req.body;
    const existeUsuario = await Usuario.findOne({ email });

    // Comprobamos que el usuario exista en la base de datos
    if (existeUsuario) {
        const error = new Error("El usuario ya esta registrado");
        return res.status(400).json({ msg: error.message });
    }

    // Comprobamos si las contraseñas coinciden
    if (password !== confirmPassword) {
        const error = new Error("Las contraseñas no coinciden");
        return res.status(400).json({ msg: error.message });
    }

    try {
        // Registrar usuario
        const usuario = new Usuario(req.body);
        const usuarioGuardado = await usuario.save();

        // Generar token
        const token = await generarJWT({ id: usuario._id, rol: usuario.rol })
        res.cookie("token", token);
        return res.status(200).json(usuarioGuardado);
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
        // Revisar password
        if (await !existeUsuario.comprobarPassword(password)) {
            const error = new Error("La contraseña es incorrecta")
            return res.status(404).json({ msg: error.message });
        }

        // Generar token
        // const token = await generarJWT({ id: existeUsuario._id, rol: existeUsuario.rol })
        // res.cookie("token", token);
        res.json({
            _id: existeUsuario._id,
            email: existeUsuario.email,
            token: generarJWT({ id: existeUsuario._id, rol: existeUsuario.rol }),
        });
        // return res.status(200).json({ msg: "Usuario autenticado correctamente" });

    } catch (error) {
        return res.status(500).json({ msg: "Hubo un problema" });
    }
};

export { register, login };
