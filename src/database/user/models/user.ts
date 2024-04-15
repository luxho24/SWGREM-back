import db from "../../connection";
import { DataTypes } from "sequelize";

export const User = db.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    dni: {
        type: DataTypes.INTEGER,
    },
    nombreUsu: {
        type: DataTypes.STRING,
    },
    apellidoUsu: {
        type: DataTypes.STRING,
    },
    edadUsu: {
        type: DataTypes.INTEGER,
    },
    sexoUsu: {
        type: DataTypes.STRING,
    },
    telfUsu: {
        type: DataTypes.INTEGER,
    },
    direccUsu: {
        type: DataTypes.STRING,
    },
    passUsu: {
        type: DataTypes.STRING,
    },
    idRol: {
        type: DataTypes.INTEGER,
    }
},
{ schema: "user", timestamps: false, freezeTableName: true })