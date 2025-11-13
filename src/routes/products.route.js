import { Router } from 'express';
import productsController from '../controllers/products.controller.js';

const router = Router();

// Especificas
router.post('/products/create', productsController.createProduct);

// Dinamicas
router.get("/products/:id", productsController.getProductById);

router.delete('/products/:id', (req, res) => {
    res.send(`Delete product with ID: ${req.params.id}`);
});

// Generales
router.get("/products", productsController.getAllProducts);


export default router;
