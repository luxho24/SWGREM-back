import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
import marcaRoutes from './routes/marcaRoutes.js'; // Importa las rutas de marcas

dotenv.config();

const app = express();
app.use(express.json());
conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
};

app.use(cors(corsOptions));

// Endpoints
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/marcas', marcaRoutes); // Añadimos el endpoint para las marcas

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});