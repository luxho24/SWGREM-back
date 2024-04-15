import { Request, Response } from "express";
import bcrypt from 'bcrypt';

import { User } from "../../database/user/models/user";


export const newUser = async (req: Request, res: Response) => {

    const { dni, nombreUsu, apellidoUsu, edadUsu, sexoUsu, telfUsu, direccUsu, passUsu, idRol } = req.body;

    // Validación de la contraseña
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(passUsu)) {
        return res.status(400).json({
            msg: "La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número."
        });
    }

    //Validacion DNI
    const user = await User.findOne({ where: { dni: dni } })
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el DNI ${dni}`
        })
    }

    const hashedPassword = await bcrypt.hash(passUsu, 10);

    try {
        await User.create({
            dni: dni,
            nombreUsu: nombreUsu,
            apellidoUsu: apellidoUsu,
            edadUsu: edadUsu,
            sexoUsu:sexoUsu,
            telfUsu: telfUsu,
            direccUsu: direccUsu,
            idRol:idRol,
            passUsu: hashedPassword
        });

        res.json({
            msg: `Usuario ${nombreUsu} creado exitosamente!`
        });
    } catch (error) {
        console.error('Error al crear un nuevo usuario:', error);
        res.status(500).json({
            error: 'Error interno del servidor al crear un nuevo usuario.'
        });
    }
}