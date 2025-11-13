import { db } from "../data/data.js"
import { collection, query, where, getDocs, addDoc} from "firebase/firestore"
import bcrypt from 'bcrypt'

const usersCollection = collection(db, "users")

// Buscar un usuario por email

export const getUserByEmail = async (email) =>
{

    
    const q = query(usersCollection, where("email", "==", email))
    const querySnapshot = await getDocs(q)


    if (querySnapshot.empty) {
      return null;
    }

    return {
      id: querySnapshot.docs[0].id,
      ...querySnapshot.docs[0].data()
    };
}

// Guardar un usuario nuevo

export const saveUser = async (user) => {
  await addDoc(usersCollection, {
    name: user.name,
    email: user.email,
    password: user.password
  });
};

// Chequear validez de un usuario

export const validateUser = async (user) => {
  
  // 1. Buscar usuario por email
  const q = query(usersCollection, where("email", "==", user.email));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) return false;

  // 2. Obtener usuario
  const userData = querySnapshot.docs[0].data();

  // 3. Comparar contraseña
  const isMatch = await bcrypt.compare(user.password, userData.password);

  return isMatch;
};
