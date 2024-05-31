import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
<<<<<<< Updated upstream
import marcaRoutes from './routes/marcaRoutes.js'; // Importa las rutas de marcas

dotenv.config();

const app = express();
app.use(express.json());
conectarDB();

// Permitir todas las solicitudes CORS
app.use(cors());

// Endpoints
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/marcas', marcaRoutes); // Añadimos el endpoint para las marcas
=======
import cotizacionRoutes from './routes/cotizacionRoutes.js';
import brandRoutes from './routes/brandRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1 || !origin) {
            // El origen del Request está permitido
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
};

app.use(cors(corsOptions));

// Endpoints
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/cotizaciones', cotizacionRoutes);
app.use('/api/brands', brandRoutes);
>>>>>>> Stashed changes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});