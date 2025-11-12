import productsModel from '../models/products.model.js'

const getAllProducts = () => productsModel.getAllProducts();

const getProductById = (id) => productsModel.getProductById(id);

const productsService = {
  getAllProducts,
  getProductById,
};

export default productsService
