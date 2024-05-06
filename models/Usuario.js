import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const usuarioSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
        },
        sex: {
            type: String,
            required: true,
            trim: true,
        },
        birthdate: {
            type: String,
            required: true,
            trim: true,
        },
        phone: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        rol: {
            type: String,
            required: true,
            default: 'USER',
        },
        // token: {
        //     type: String,
        //     required: true,
        // },
    },
    {
        timestamps: true,
    }
)

// Encriptar constraseña
usuarioSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Comparar contraseña
usuarioSchema.methods.comprobarPassword = async function (
    passwordFormulario
) {
    return await bcrypt.compare(passwordFormulario, this.password); // El metodo compare de bcrypt retorna "true" o "false"
};

// Exportacion del Schema
const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;