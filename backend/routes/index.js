import express from 'express';
import {
  getProducts,
  saveProduct,
  updateProduct,
  getProductById,
  deleteProduct,
} from '../controllers/productController.js';
import {
  getCategories,
  saveCategory
} from '../controllers/CategoryController.js';
import { getHomePage } from '../controllers/HomePageController.js';
import { getBanners, saveBanner } from '../controllers/BannerController.js';

 
const router = express.Router();

router.get('/homepage', getHomePage);

router.get('/product/', getProducts);
router.get('/product/:id', getProductById);
router.post('/product/', saveProduct);
router.patch('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

router.get('/categories/', getCategories);
router.post('/categories/', saveCategory);

router.get('/banner', getBanners);
router.post('/banner', saveBanner);

export default router;
