import Category from '../models/Category.js';
import Product from '../models/Product.js';
import Banner from '../models/Banner.js';
import Campaign from '../models/Campaign.js';

export const getHomePage = async (req, res) => {
    try {
      const categories = await Category.find({});
      const products = await Product.find({});
      const banners = await Banner.find({});
      const campaigns = await Campaign.find({});

      const response = {
          categories,
          products,
          banners,
          campaigns
      }
      
      res.json(response); 
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};