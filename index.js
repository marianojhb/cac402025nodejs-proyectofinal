import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import productsRoutes from './src/routes/products.route.js';
import authRoutes from './src/routes/auth.routes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;


// Middleware
const corsOptions = {
  origin: ["http://localhost:5173",],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// 3. RUTAS DE LA APLICACIÓN
// Montar las rutas de autenticación
app.use("/auth", authRoutes);

// Montar las rutas de productos
app.use("/api", productsRoutes);

// 4. MIDDLEWARE PARA MANEJO DE ERRORES

// Middleware 404 - Debe ir después de todas las rutas
app.use((req, res, next) => {
    res.status(404).send('Recurso no encontrado');
});

// Middleware de manejo de errores general
app.use((err, req, res, next) => {
    console.error(err.stack);
    if (res.headersSent) return next(err);
    res.status(500).send('¡Algo salió mal!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Deployed on url https://localhost:${PORT}`);
});
