import mongoose from "mongoose";

const marcaSchema = mongoose.Schema(
    {
        brand: {
            type: String,
            required: true,
            trim: true,
        },
        model: {
            type: String,
            required: true,
            trim: true,
        },
        descriptionProblem: {
            type: String,
            trim: true,
            default: "-",
        },
    },
    {
        timestamps: true,
    }
)

const Marca = mongoose.model('Marca', marcaSchema);
export default Marca;