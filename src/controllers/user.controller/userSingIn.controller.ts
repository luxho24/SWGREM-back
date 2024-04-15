import { Request, Response } from "express"
import bcrypt from 'bcrypt';

import { User } from "../../database/user/models/user";
import jwt from 'jsonwebtoken'

export const loginUser = async (req: Request, res: Response) => {

    const { dni, passUsu } = req.body;

    const user: any = await User.findOne({ where: {dni: dni}})

    //validacion si el usuario existe en la db
    if(!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el correo ${dni} en la base de datos`
        })
    }

    //validacion de password
    const passwordValid = await bcrypt.compare(passUsu, user.password)
    if(!passwordValid) {
        return res.status(400).json({
            msg: `password incorrecta`
        })
    }

    //generar token
    const token = jwt.sign({
        dni: dni
    }, process.env.NODE_JWT_KEY || '123dev')

    res.json({token});

}