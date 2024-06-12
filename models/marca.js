import mongoose from "mongoose";

const marcaSchema = mongoose.Schema(
    {
        Marca: {
            type: String,
            required: true,
            trim: true,
        },
        Modelo: {
            type: String,
            required: true,
            trim: true,
        },     
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Registrar_Marca", marcaSchema);
