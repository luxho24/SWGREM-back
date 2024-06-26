import xlsx from 'xlsx';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import conectarDB from './config/db.js';
import Marca from './models/marca.js';

dotenv.config();
conectarDB();

const importarExcel = async () => {
    try {
        const workbook = xlsx.readFile('C:\\Users\\alumno\\Downloads\\MUESTRA DE INVENTARIO (1).xlsx');
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        const marcas = [];
        for (let row = 10; row <= 543; row++) {
            const MarcaNombre = worksheet[`C${row}`] ? worksheet[`C${row}`].v : null;
            const ModeloNombre = worksheet[`D${row}`] ? worksheet[`D${row}`].v : null;

            if (MarcaNombre && ModeloNombre) {
                marcas.push({ Marca: MarcaNombre, Modelo: ModeloNombre });
            }
        }

        await Marca.insertMany(marcas);
        console.log("Datos importados exitosamente");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error al importar datos:", error);
        mongoose.connection.close();
    }
};

importarExcel();
