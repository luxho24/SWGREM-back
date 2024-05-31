import express from 'express';
const router = express.Router();
import { createBrand } from '../controllers/brandController.js';

router.post('/', createBrand);

export default router;