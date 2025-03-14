const socksRouter = require('express').Router();
const { User, Socks, Cart }  = require('../../db/models/');
const { verifyAccessToken, verifyRefreshToken }  = require('../middlewares/VerifyTokens');

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

    res.json({ image: sock.image, sockId: sock.id, });

  } catch (error) {
    console.error("Ошибка при получении носков:", error);
    res.status(500).json({ error: "Внутренняя ошибка сервера" });
  }
});

socksRouter.post('/addCart', verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id; 
    const { sockId } = req.body; 

    if (!sockId) {
      return res.status(400).json({ error: 'Не указан sockId' });
    }

    const newCartItem = await Cart.create({ userId, sockId });

    res.json({ message: 'Носок добавлен в корзину', cartItem: newCartItem });
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});


module.exports = socksRouter;