const cartRouter = require('express').Router();
const { where } = require('sequelize');
const { Cart, Order, Socks } = require('../../db/models/');
const { verifyAccessToken, verifyRefreshToken } = require('../middlewares/VerifyTokens');
const checkId = require('../middlewares/checkId');

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

cartRouter.get('/', verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;

    if (!userId) {
      return res.status(400).json({ error: 'Не указан userId' });
    }

    const allSocks = await Cart.findAll({
      where: { userId },
      include: [{model: Socks}],
    })

    res.json({allSocks})
    console.log('Получены носки!', allSocks);
    
  } catch (error) {
    console.error('Ошибка при добавлении в корзину:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

cartRouter.delete("/:sockId", verifyAccessToken, async (req, res) => {
  const userId = res.locals.user.id;
  const { sockId } = req.params
  try {
    const deleted = await Cart.findOne({where: {id: sockId, userId}});
    deleted.destroy();
    console.log("Элемент был успешно удален");
    res.status(204).json({ message: 'Носок удален' })
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
})

cartRouter.post('/checkout', verifyAccessToken, async (req, res) => {
  try {
    const userId = res.locals.user.id;

    const cartItems = await Cart.findAll({ where: { userId } });

    if (!cartItems.length) {
      return res.status(400).json({ error: "Корзина пуста" });
    }

    const order = await Order.create({ userId });

    await Cart.destroy({ where: { userId } });

    res.json({ message: "Заказ оформлен!", order });
  } catch (error) {
    console.error("Ошибка при оформлении заказа:", error);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

module.exports = cartRouter;


module.exports = cartRouter;
