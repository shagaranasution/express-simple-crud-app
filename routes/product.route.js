import { Router } from 'express';
import {
  getProducts,
  getProductById,
  mutateProducts,
  updateInProductsById,
  deleteInProductsById,
} from '../controllers/product.controller.js';

const route = Router();

route.get('/', getProducts);

route.get('/:productId', getProductById);

route.post('/', mutateProducts);

route.put('/:productId', updateInProductsById);

route.delete('/:productId', deleteInProductsById);

export default route;
