import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getUserByEmail, saveUser, validateUser} from "../models/users.model.js";

export const registerService = async (name, email, password) => {

  // Verificar si el email existe
  const exists = await getUserByEmail(email)

  if(exists) {
    const err = new Error("El email ya se encuentra registrado")
    err.status = 400
    throw err
  }

  // Hashear password

  const hashedPassword = await bcrypt.hash(password, 10);

  // Crear usuario

  const newUser = {
    name,
    email,
    password: hashedPassword
  }

  await saveUser(newUser)

  // Crear token JWT

  const token = jwt.sign(
    {email},
    process.env.JWT_SECRET_KEY,
    {expiresIn: process.env.JWT_EXPIRES}
  )
  
  return token
}


export const loginService = async (email, password) => {
  // Verificar si el usuario es válido
  const success = await validateUser({email, password});

  if (!success) {
    const err = new Error("Credenciales incorrectas");
    err.status = 400;
    throw err;
  }

  // Crear token JWT

  const token = jwt.sign({ email }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  return token
  
}