import Carrito from '../models/Carrito.js';

const createCarrito = async (req, res) => {
    const carrito = new Carrito({
        idProduct: req.body.idProduct,
        nameProduct: req.body.nameProduct,
        description: req.body.description,
        quantity:req.body.quantity,
        price:req.body.price || []
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
        const carritos = await Carrito.find();
        res.status(200).json(carritos);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un problema al obtener los productos del carrito.' });
    }
}

const updateCarrito = async (req, res) => {
    const { id } = req.params;
    const { idProduct, nameProduct, description, quantity, price } = req.body;
    try {
        const carritoActualizado = await Carrito.findByIdAndUpdate(
            id,
            { idProduct, nameProduct, description, quantity, price },
            { new: true }
        );

        if (!carritoActualizado) {
            return res.status(404).json({ msg: 'Producto no encontrado en el carrito.' });
        }

        res.status(200).json(carritoActualizado);
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un problema al actualizar el producto en el carrito.' });
    }
}

const deleteCarrito = async (req, res) => {
    const { id } = req.params;

    try {
        const carritoEliminado = await Carrito.findByIdAndDelete(id);

        if (!carritoEliminado) {
            return res.status(404).json({ msg: 'Producto no encontrado en el carrito.' });
        }

        res.status(200).json({ msg: 'Producto eliminado del carrito.' });
    } catch (error) {
        res.status(500).json({ msg: 'Hubo un problema al eliminar el producto del carrito.' });
    }
}

export { createCarrito, getCarrito, updateCarrito, deleteCarrito };