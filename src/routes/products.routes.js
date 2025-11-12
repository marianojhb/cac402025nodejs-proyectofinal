import { Router } from 'express';

const router = Router();

router.get('/products', (req, res) => {
    res.send('List of products');
});

router.get("/products/:id", (req, res) => {
  res.send(`Product details for ID: ${req.params.id}`);
});

router.post('/products', (req, res) => {
    res.send('Create a new product');
});

router.delete('/products/:id', (req, res) => {
    res.send(`Delete product with ID: ${req.params.id}`);
});

export default router;