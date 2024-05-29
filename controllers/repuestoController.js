import Repuesto from "../models/Repuesto.js"

const register = async (req,res) => {
    const repuesto = new Repuesto(req.body)
    await repuesto.save()
    res.status(400).json({msg: "Repuesto Registrado"})
}

export {register};