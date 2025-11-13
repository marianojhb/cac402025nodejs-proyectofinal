const productos = [
    {
        id: 1,
        name: "Producto A",
        price: 100,
        stock: 10
    },    {
        id: 2,
        name: "Producto B",
        price: 200,
        stock: 20
    },
        {
        id: 3,
        name: "Producto C",
        price: 300,
        stock: 30
    }
]

const getAllProducts = () => productos

const getProductById = (id)=> productos.find( (p)=> p.id == id )

const productsModel = {
  getAllProducts,
  getProductById,
};

export default productsModel
