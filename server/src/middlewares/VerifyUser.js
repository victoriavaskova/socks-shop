const jwt = require('jsonwebtoken');

const verifyUser = (req, res, next) => {
  const token = req.headers.authorization; // Токен из заголовка
  if (!token) {
    return res.status(401).json({ message: 'Необходима авторизация' });
  }

  try {
    // Проверяем токен
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET); // Замените на ваш секретный ключ
    req.user = decoded; // Сохраняем данные пользователя в запросе
    next();
  } catch (error) {
    res.status(401).json({ message: 'Неверный токен' });
  }
};

module.exports = verifyUser;