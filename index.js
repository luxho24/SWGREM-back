import express from 'express';
// app.js o index.js

const express = require('express');
const mongoose = require('mongoose');
const repuestosRoutes = require('./routes/repuestosRoutes');

const app = express();
app.use(express.json());

mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error conectando a MongoDB', err);
});

app.use('/api/repuestos', repuestosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});