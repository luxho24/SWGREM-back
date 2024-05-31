import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaInfoCircle, FaTrash } from 'react-icons/fa';
import axios from 'axios';


const BrandDashboard = () => {
    const [equipos, setEquipos] = useState([]);
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [modelosDisponibles, setModelosDisponibles] = useState([]);
    const [detallesEquipo, setDetallesEquipo] = useState(null);
    const [editIndex, setEditIndex] = useState(-1);
    const [error, setError] = useState('');
    const [view, setView] = useState('lista');

    useEffect(() => {
        if (marca) {
            setModelosDisponibles(modelosPorMarca[marca] || []);
        } else {
            setModelosDisponibles([]);
        }
    }, [marca]);

    const modelosPorMarca = {
        Xiaomi: ["Xiaomi 13 Pro", "Xiaomi 13", "Xiaomi 12T Pro", "Xiaomi 12T", "Xiaomi 12 Lite", "Redmi Note 12 Pro Speed Edition", "Redmi Note 12 Pro", "Redmi Note 12", "Redmi Note 12 5G", "Redmi 12C"],
        Samsung: ["Samsung Galaxy S23 Ultra", "Samsung Galaxy S23+", "Samsung Galaxy S23", "Samsung Galaxy Z Fold5", "Samsung Galaxy Z Flip5", "Samsung Galaxy S22 Ultra", "Samsung Galaxy S22+", "Samsung Galaxy S22", "Samsung Galaxy A34", "Samsung Galaxy A54"],
        Motorola: ["Motorola Edge 30 Ultra", "Motorola Edge 30 Fusion", "Motorola Edge 30", "Motorola G200", "Motorola G71", "Motorola G51", "Motorola G41", "Motorola G31", "Motorola G22", "Motorola E13"],
        Honor: ["HONOR Magic5 Pro", "HONOR Magic5", "HONOR 80 Pro", "HONOR 80", "HONOR X9a", "HONOR 70", "HONOR X8", "HONOR 50", "HONOR X7", "HONOR X6"],
        Oppo: ["OPPO Find X6 Pro", "OPPO Find X6", "OPPO Reno9 Pro+", "OPPO Reno9 Pro", "OPPO Reno9", "OPPO A98", "OPPO A78", "OPPO A77s", "OPPO A57", "OPPO A17"],
        Apple: ["iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14 Plus", "iPhone 14", "iPhone 13 mini", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE (3ra generación)", "iPhone SE (2da generación)"]
    };

    const validateInput = () => {
        if (!marca.trim() || !modelo.trim() || !descripcion.trim()) {
            setError('Todos los campos son obligatorios');
            return false;
        }
        setError('');
        return true;
    };

    const handleRegistrar = () => {
        if (validateInput()) {
            const nuevoEquipo = { marca, modelo, descripcion };
            axios.post('http://localhost:3000/marcas', nuevoEquipo)
                .then(response => {
                    setEquipos([...equipos, nuevoEquipo]);
                    setMarca('');
                    setModelo('');
                    setDescripcion('');
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }
    };

    const handleModificar = (index) => {
        setEditIndex(index);
        setMarca(equipos[index].marca);
        setModelo(equipos[index].modelo);
        setDescripcion(equipos[index].descripcion);
    };

    const handleGuardarModificacion = () => {
        if (validateInput()) {
            const equiposModificados = [...equipos];
            equiposModificados[editIndex] = { marca, modelo, descripcion };
            setEquipos(equiposModificados);
            cancelarEdicion();
        }
    };

    const cancelarEdicion = () => {
        setEditIndex(-1);
        setMarca('');
        setModelo('');
        setDescripcion('');
    };

    const handleEliminar = (index) => {
        const equiposActualizados = equipos.filter((_, i) => i !== index);
        setEquipos(equiposActualizados);
    };

    const handleEliminarTodos = () => {
        setEquipos([]);
    };

    const handleVerDetalles = (equipo) => {
        setDetallesEquipo(equipo);
        setView('detalles');
    };

    const handleVolver = () => {
        setView('lista');
        setDetallesEquipo(null);
    };

    return (
        <div className="flex justify-center items-start h-screen bg-gray-900 text-white">
            <div className="flex w-full max-w-6xl">
                <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex-1 mr-4">
                    <h2 className="text-2xl font-bold mb-6">{editIndex === -1 ? "Registrar Equipo" : "Modificar Equipo"}</h2>
                    {error && <p className="text-red-400">{error}</p>}
                    <div className="mb-4">
                        <label htmlFor="marca" className="block font-medium mb-2">Marca</label>
                        <input list="marcas" type="text" id="marca" className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700" placeholder="Ingrese la marca" value={marca} onChange={(e) => setMarca(e.target.value)} />
                        <datalist id="marcas">
                            {Object.keys(modelosPorMarca).map(marca => <option key={marca} value={marca} />)}
                        </datalist>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="modelo" className="block font-medium mb-2">Modelo</label>
                        <input list="modelos" type="text" id="modelo" className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700" placeholder="Ingrese el modelo" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                        <datalist id="modelos">
                            {modelosDisponibles.map(modelo => <option key={modelo} value={modelo} />)}
                        </datalist>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="descripcion" className="block font-medium mb-2">Descripción</label>
                        <textarea
                            id="descripcion"
                            className="w-full border border-gray-600 rounded-md py-2 px-4 bg-gray-700"
                            placeholder="Ingrese una descripción del equipo"
                            value={descripcion}
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        {editIndex === -1 ? (
                            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded" onClick={handleRegistrar}>
                                Registrar
                            </button>
                        ) : (
                            <>
                                <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded" onClick={handleGuardarModificacion}>
                                    Guardar
                                </button>
                                <button className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={cancelarEdicion}>
                                    Cancelar
                                </button>
                            </>
                        )}
                        <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={handleEliminarTodos}>
                            Eliminar Todos
                        </button>
                    </div>
                </div>
                {view === 'lista' && (
                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex-1">
                        <h2 className="text-2xl font-bold mb-6">Equipos Registrados</h2>
                        {equipos.length === 0 ? (
                            <p>No hay equipos registrados</p>
                        ) : (
                            <ul>
                                {equipos.map((equipo, index) => (
                                    <li key={index} className="flex justify-between items-center mb-2">
                                        <span>{equipo.marca} - {equipo.modelo}</span>
                                        <div>
                                            <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleModificar(index)}>
                                                <FaPencilAlt />
                                            </button>
                                            <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-1 px-2 rounded mr-2" onClick={() => handleVerDetalles(equipo)}>
                                                <FaInfoCircle />
                                            </button>
                                            <button className="bg-red-700 hover:bg-red-800 text-white font-bold py-1 px-2 rounded" onClick={() => handleEliminar(index)}>
                                                <FaTrash />
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
                {view === 'detalles' && detallesEquipo && (
                    <div className="bg-gray-800 rounded-lg shadow-lg p-8 flex-1">
                        <button className="mb-4 bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleVolver}>
                            Atrás
                        </button>
                        <h3 className="font-bold text-lg mb-4">Detalles del Equipo</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <p><strong>Marca:</strong> {detallesEquipo.marca}</p>
                                <p><strong>Modelo:</strong> {detallesEquipo.modelo}</p>
                            </div>
                            <div className="col-span-full">
                                <p><strong>Descripción:</strong></p>
                                <p>{detallesEquipo.descripcion}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BrandDashboard;