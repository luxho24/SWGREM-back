import Brand from '../models/Brand.js';

export const createBrand = async (req, res) => {
  try {
    const { name, description } = req.body;
    const brand = new Brand({ name, description });
    await brand.save();
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ message: 'Error creating brand', error });
  }
};