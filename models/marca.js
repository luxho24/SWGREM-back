import mongoose from "mongoose";

const marcaSchema = mongoose.Schema(
    {
        nameMar: {
            type: String,
            required: true,
            trim: true,
        },
        ModelMar: {
            type: String,
            required: true,
            trim: true,
        },     
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("marca", marcaSchema);