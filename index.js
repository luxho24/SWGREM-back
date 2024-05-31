import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import conectarDB from './config/db.js';
import usuarioRoutes from './routes/usuarioRoutes.js';
// import cotizacionRoutes from './routes/cotizacionRoutes.js';  // Comentado para desactivar cotizaciones
import marcaRoutes from './routes/marcaRoutes.js';  // Asegúrate de importar las rutas de marcas

const app = express();
app.use(express.json());
dotenv.config();
conectarDB();

const dominiosPermitidos = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('No permitido por CORS'));
        }
    },
};

app.use(cors(corsOptions));

// Endpoints
app.use('/api/usuarios', usuarioRoutes);
// app.use('/api/cotizaciones', cotizacionRoutes);  // Comentar esta línea para desactivar la ruta de cotizaciones
app.use('/api/marcas', marcaRoutes);  // Registrar la ruta de marcas

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});