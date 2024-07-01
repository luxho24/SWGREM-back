import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import cotizacionRoutes from "./routes/cotizacionRoutes.js";

const app = express();
dotenv.config();
conectarDB();

app.use(express.json());

const dominiosPermitidos = [
  'http://localhost:5173',
  'http://127.0.0.1:5173'
];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || dominiosPermitidos.indexOf(origin) !== -1) {
      // El origen del Request esta permitido
      callback(null, true);
    } else {
      callback(new Error("No permitido por CORS"));
    }
  }
};

app.use(cors(corsOptions));

// Endpoints
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/cotizaciones", cotizacionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});
