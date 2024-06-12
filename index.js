import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import marcaRoutes from "./routes/marcaRoutes.js";

const app = express();
app.use(express.json())
dotenv.config();
conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
// const corsOptions = {
//     origin: function (origin, callback) {
//         if (dominiosPermitidos.indexOf(origin) !== -1) {
//             // El origen del Request esta permitido
//             callback(null, true);
//         } else {
//             callback(new Error("No permitido por CORS"));
//         }
//     },
// };

// app.use(cors(corsOptions));

// Endpoints
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/Marcas", marcaRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://127.0.0.1:${PORT}`);
});