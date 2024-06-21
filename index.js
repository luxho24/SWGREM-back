import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import multer from "multer";
import {v2 as cloudinary} from 'cloudinary';
import conectarDB from "./config/db.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import cotizacionRoutes from "./routes/cotizacionRoutes.js";

const app = express();
app.use(cors({
    origin:'http://localhost:5173'
}))

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

cloudinary.config({
    cloud_name: 'dj8ngeoog',
    api_key: '283229639979224',
    api_secret: 'jUi3oUcnoXWYh8su35LERbicyoU'
  });

 const upload = multer({dest:'uploads/'});

 app.post('/upload', upload.single('image'), async(req,res)=>{
    try{
        const result= await cloudinary.uploader.upload(req.file.path);
        res.json(result);
    }catch(error){
        console.error(error);
        res.status(500).json({message:'Error uploading image'});
    }
    
 })

// Endpoints
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/cotizaciones", cotizacionRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`);
});