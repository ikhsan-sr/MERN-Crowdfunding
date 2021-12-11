import Category from '../models/Category.js';

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories); 
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const saveCategory = async (req, res) => {
  const category = new Category(req.body);

  try {
    const saveCategory = await category.save();
    res.status(201).json(saveCategory);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}