export default class UserValidate {
    static validateSignUp({ name, email, password, repeatPassword }) {
          if (!name || name.trim().length === 0) {
        return {
          isValid: false,
          error: "Введите имя пользователя",
        };
      }
  
      if (!email || email.trim().length === 0) {
        return {
          isValid: false,
          error: "Введите корректный Email",
        };
      }
  
      if (!password || password.trim().length < 3) {
        return {
          isValid: false,
          error: "Пароль не менее 3 символов",
        };
      }
  
      if (repeatPassword !== password) {
        return {
          isValid: false,
          error: "Пароли не совпадают",
        };
      }
  
      return {
        isValid: true,
        error: null,
      };
    }
  
    static validateLogin({ email, password }) {
      if (!email || email.trim().length === 0) {
        return {
          isValid: false,
          error: "Email обязателен",
        };
      }
  
      if (!password || password.trim().length < 3) {
        return {
          isValid: false,
          error: "Пароль не менее 3 символов",
        };
      }
  
      return {
        isValid: true,
        error: null,
      };
    }
  }