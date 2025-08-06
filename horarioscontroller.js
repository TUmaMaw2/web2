const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

exports.getHorarios = async (req, res) => {
  try {
    const horarios = await prisma.horario.findMany({
      where: { userId: req.user.id },
      orderBy: { createdAt: 'desc' }
    });
    res.json(horarios);
  } catch (err) {
    res.status(500).json({ error: "Error al obtener horarios", details: err.message });
  }
};

exports.createHorario = async (req, res) => {
  const { unidad, salida, llegada } = req.body;
  try {
    const horario = await prisma.horario.create({
      data: {
        unidad,
        salida,
        llegada,
        userId: req.user.id,
      },
    });
    res.status(201).json(horario);
  } catch (err) {
    res.status(500).json({ error: "Error al guardar horario", details: err.message });
  }
};
