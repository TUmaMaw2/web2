const express = require("express");
const router = express.Router();
const { getHorarios, createHorario } = require("../controllers/horariosController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/", verifyToken, getHorarios);
router.post("/", verifyToken, createHorario);

module.exports = router;
