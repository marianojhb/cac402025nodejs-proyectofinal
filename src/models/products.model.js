
import { db } from '../data/data.js';
import { collection, getDocs, getDoc, addDoc, setDoc, deleteDoc, doc } from 'firebase/firestore';

const productCollection = collection(db, 'productos');

const getAllProducts = async () => {
  const productsSnapshot = await getDocs(productCollection);
  const productsList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return productsList;
}

// const getProductById = (id)=> productos.find( (p)=> p.id == id )

const getProductById = async (id) => {
  const docRef = doc(productCollection, id)
  const docSnap = await getDoc(docRef)
 
  if(docSnap.exists()) {
    return docSnap.data()
  } else{ return null }
}

const createProduct = async (producto) => {
  try {
    const res = await setDoc(
      doc(db, "productos", String(producto.id)),
      producto
    );
    return { id: producto.id , ...producto }; 
  } catch (err) {
    console.log(err);
    return null;
  }
}

const deleteProduct = async (id) => {
  try
  {
    const docRef = doc(productCollection, id)

    const snap = await getDoc(docRef)

    if (!snap.exists()) {
      return null // no existia
    }

    await deleteDoc(docRef)
    
    return { id }; 

  }
  catch (err)
  {
    console.log(`Error ${err}`);
    return null;
  }
}

const productsModel = {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
};

export default productsModel
