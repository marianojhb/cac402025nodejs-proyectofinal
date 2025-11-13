import { create } from 'domain';
import productsService from '../services/products.service.js';

const getAllProducts =  async (req, res) => {
    const productos = await productsService.getAllProducts();
    if (!productos)
      return res.status(404).json({ message: "No hay productos." });
    return res.status(200).json({
        message: "Productos encontrados.",
        productos: productos,
    });
}
    

const getProductById = async (req, res) => {
  const id = req.params.id;
  const producto = await productsService.getProductById(id);
  if (!producto) return res.status(404).json({ message: "No hay productos." });
  return res.status(200).json({
    message: "Producto encontrado.",
    producto: producto,
  });
};

const createProduct = async (req, res) => {
  try
  {
    const nuevoProducto = { ...req.body }
    const createdProduct = await productsService.createProduct(nuevoProducto)
    if (createdProduct) {
      return res.status(201).json({message: "Producto creado con éxito", producto: createdProduct})
    } else {
      return res.status(400).json({ message: "Producto no creado" });
    }
  }
  catch (err)
  {
    console.error("Error creating product:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
}

const productsController = {
  getAllProducts,
  getProductById,
  createProduct,
};

export default productsController
