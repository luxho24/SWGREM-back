import Cotizacion from "../models/Cotizacion.js";

const register = async (req, res) => {
    const cotizacionData = req.body;
    
    if (req.filePhoto) {
        const photoFile = req.filePhoto;
        const photoName = `photos/${Date.now()}_${photoFile.originalname}`;
        const blob = bucket.file(photoName);

        const blobStream = blob.createWriteStream({
            resumable: false,
            metadata: {
                contentType: photoFile.mimetype
            }
        });

        blobStream.on('error', (err) => {
            console.error(err);
            return res.status(500).json({ error: 'Error uploading photo' });
        });

        blobStream.on('finish', async () => {
            const publicUrl = `https://storage.googleapis.com/${bucket.name}/${photoName}`;
            cotizacionData.photoUrl = publicUrl;

            try {
                const cotizacion = new Cotizacion(cotizacionData);
                const cotizacionGuardada = await cotizacion.save();
                return res.status(200).json(cotizacionGuardada);
            } catch (error) {
                console.error(error);
                return res.status(500).json({ error: 'Error saving cotizacion' });
            }
        });

        blobStream.end(photoFile.buffer);
    } else {
        try {
            const cotizacion = new Cotizacion(cotizacionData);
            const cotizacionGuardada = await cotizacion.save();
            return res.status(200).json(cotizacionGuardada);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Error saving cotizacion' });
        }
    }
};

const getCotizaciones = async (req, res) => {
    const cotizaciones = await Cotizacion.find();
    return res.status(200).json(cotizaciones);
}

const getCotizacionById = async (req, res) => {
    const cotizacion = await Cotizacion.findById(req.params.id);
    return res.status(200).json(cotizacion);
}

const updateCotizacion = async (req, res) => {
    const cotizacion = await Cotizacion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    return res.status(200).json(cotizacion);
}

const deleteCotizacion = async (req, res) => {
    await Cotizacion.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "Cotizacion eliminada" });
}

export { register, getCotizaciones, getCotizacionById, updateCotizacion, deleteCotizacion };