import { Router } from 'express';
import productsController from '../controllers/products.controller.js';

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// Especificas
router.post("/products/create", authMiddleware, productsController.createProduct);

// Dinamicas
// router.get("/products/:id", productsController.getProductById);
// router.delete("/products/:id", productsController.deleteProduct);
router
  .route("/products/:id")
  .all(authMiddleware)
  .get(productsController.getProductById)
  .delete(productsController.deleteProduct);

// Generales
router.get("/products", authMiddleware, productsController.getAllProducts);


export default router;
