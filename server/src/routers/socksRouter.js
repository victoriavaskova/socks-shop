const socksRouter = require('express').Router();
const { Socks }  = require('../../db/models/');

socksRouter.post('/', async (req, res) => {
  try {
    const { color, pattern } = req.body;

    if (!color || !pattern) {
      return res.status(400).json({ error: "Необходимо указать цвет и узор" });
    }

    const sock = await Socks.findOne({ where: { color, pattern } });

    if (!sock) {
      return res.status(404).json({ error: "Такой модели носков нет в базе" });
    }

    res.json({ image: sock.image });

  } catch (error) {
    console.error("Ошибка при получении носков:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

module.exports = socksRouter;