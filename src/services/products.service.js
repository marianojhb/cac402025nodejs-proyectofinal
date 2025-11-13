import productsModel from '../models/products.model.js'

const getAllProducts = () => productsModel.getAllProducts();

const getProductById = (id) => productsModel.getProductById(id);

const createProduct = (producto)=> productsModel.createProduct(producto);

const deleteProduct = (id) => productsModel.deleteProduct(id);

const productsService = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};

export default productsService
