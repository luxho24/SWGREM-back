import Carrito from '../models/Carrito.js';

const createCarrito = async (req, res) => {
    const carrito = new Carrito({
        usuario: req.body.usuario,
        productos: req.body.productos || []
    });

    try {
        const carritoGuardado = await carrito.save();
        return res.status(200).json(carritoGuardado);
    } catch (error) {
        return res.status(500).json({ msg: 'Hubo un problema al crear el carrito.' });
    }
}

const getCarrito = async (req, res) => {
    try {
        const carrito = await Carrito.findOne({ usuario: req.params.usuarioId, estado: 'activo' }).populate('productos.producto');
        if (!carrito) {
            return res.status(404).json({ msg: 'Carrito no encontrado.' });
        }
        return res.status(200).json(carrito);
    } catch (error) {
        return res.status(500).json({ msg: 'Hubo un problema al obtener el carrito.' });
    }
}

const updateCarrito = async (req, res) => {
    try {
        const carrito = await Carrito.findOneAndUpdate(
            { usuario: req.params.usuarioId, estado: 'activo' },
            { $set: { productos: req.body.productos } },
            { new: true }
        ).populate('productos.producto');

        if (!carrito) {
            return res.status(404).json({ msg: 'Carrito no encontrado.' });
        }
        return res.status(200).json(carrito);
    } catch (error) {
        return res.status(500).json({ msg: 'Hubo un problema al actualizar el carrito.' });
    }
}

const deleteCarrito = async (req, res) => {
    try {
        const carrito = await Carrito.findOneAndDelete({ usuario: req.params.usuarioId, estado: 'activo' });

        if (!carrito) {
            return res.status(404).json({ msg: 'Carrito no encontrado.' });
        }
        return res.status(200).json({ msg: 'Carrito eliminado.' });
    } catch (error) {
        return res.status(500).json({ msg: 'Hubo un problema al eliminar el carrito.' });
    }
}

export { createCarrito, getCarrito, updateCarrito, deleteCarrito };