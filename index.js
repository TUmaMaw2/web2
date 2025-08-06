const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/auth");
const horarioRoutes = require("./routes/horarios");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use("/api", authRoutes);
app.use("/api/horarios", horarioRoutes);

// Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
