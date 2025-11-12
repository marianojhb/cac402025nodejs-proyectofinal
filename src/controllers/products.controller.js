import productsService from '../services/products.service.js';

const getAllProducts =  async (req, res) => {
    const productos = await productsService.getAllProducts();
    if (!productos)
      return res.status(404).json({ message: "No hay productos." });
    return res.status(200).json({
        message: "Productos encontrado.",
        productos: productos,
    });
}
    

const getProductById = async (req, res) => {
  const id = req.params.id;
  const producto = await productsService.getProductById(id);
  if (!producto) return res.status(404).json({ message: "No hay productos." });
  return res.status(200).json({
    message: "Productos encontrado.",
    producto: producto,
  });
};

const productsController = {
  getAllProducts,
  getProductById,
};

export default productsController
