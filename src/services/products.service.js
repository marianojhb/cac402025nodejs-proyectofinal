import productsModel from '../models/products.model.js'

const getAllProducts = () => productsModel.getAllProducts();

const getProductById = (id) => productsModel.getProductById(id);

const createProduct = (producto)=> productsModel.createProduct(producto);

const productsService = {
  getAllProducts,
  getProductById,
  createProduct
};

export default productsService
