const cartRouter = require('express').Router();
const { User, Socks, Cart }  = require('../../db/models/');
const { verifyAccessToken, verifyRefreshToken }  = require('../middlewares/VerifyTokens');

cartRouter.post('/', verifyAccessToken, async (req, res) => {
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
  
  module.exports = cartRouter;

