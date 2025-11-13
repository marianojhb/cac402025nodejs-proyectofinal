import { registerService, loginService } from "../services/auth.service.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password)
      return res.status(400).json({error: "Faltan datos"})

    const token = await registerService(name, email, password);

    res.status(201).json({token})
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({ error: "Faltan datos" });

    const token = await loginService(email, password);

    res.status(200).json({ token });
  } catch (error) {
    res.status(error.status || 500).json({ error: error.message });
  }
};