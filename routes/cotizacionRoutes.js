import { Router } from "express";
import { CloudinaryStorage } from 'multer-storage-cloudinary'; 
import multer from 'multer'; 
import cloudinary from "../config/cloudinaryConfig.js";
import { register, getCotizaciones } from "../controllers/cotizacionController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'cotizaciones',
    allowed_formats: ['jpg','jpeg', 'png', 'mp4']
  }
});

const parser = multer({ storage: storage });

router.post('/register', parser.fields([{ name: 'foto', maxCount: 1 }, { name: 'video', maxCount: 1 }]), register);
router.get('/getCotizaciones', getCotizaciones);

export default router