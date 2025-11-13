import { loginService } from "../services/auth.service.js";

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const token = await loginService(email, password);

    res.json({ token });
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};