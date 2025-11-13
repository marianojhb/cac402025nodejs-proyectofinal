import jwt from "jsonwebtoken";

const MOCK_USER = {
  email: "admin@admin.com",
  password: "123456",
};

export const loginService = async (email, password) => {
  if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
    const error = new Error("Credenciales inválidas");
    error.status = 401;
    throw error;
  }

  const payload = { email };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });

  return token;
};
