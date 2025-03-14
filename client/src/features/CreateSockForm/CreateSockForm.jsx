import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import "./CreateSockForm.css";
import axiosInstance from "../../shared/lib/axiosinstance";

export default function CreateSockForm() {
  const [color, setColor] = useState("Белый");
  const [pattern, setPattern] = useState("");
  const [sockImage, setSockImage] = useState("/white.png");
  const [sockId, setSockId] = useState(null);
  const [message, setMessage] = useState("");


  const handleGenerate = () => {
    axiosInstance
      .post("/createsocks", { color, pattern })
      .then((response) => {
        console.log({ color, pattern })
        console.log("Сгенерировано:", response.data);
        setSockImage(response.data.image);
        setSockId(response.data.sockId);
      })
      .catch((error) => {
        console.log({ color, pattern })
        console.error("Ошибка генерации:", error);
      });
  };

  const handleAddToCart = () => {
    if (!sockId) {
      setMessage("Сначала сгенерируйте носок!");
      return;
    }
    axiosInstance
    .post("/createsocks/addCart", { sockId }, { withCredentials: true })
    .then(() => {
      setMessage("Товар добавлен в корзину.");
    })
    .catch((error) => {
      console.error("Ошибка при добавлении в корзину:", error);
    });
};

const handleAddToFav = () => {
  if (!sockId) {
    setMessage("Сначала сгенерируйте носок!");
    return;
  }
  axiosInstance
  .post("/createsocks/addFav", { sockId }, { withCredentials: true })
  .then(() => {
    setMessage("Товар добавлен в избранное.");
  })
  .catch((error) => {
    console.error("Ошибка при добавлении в избранное:", error);
  });
};


  return (
    <div className="sock-generator">
      <div className="sock-preview">
      <img src={sockImage} alt="Носок" />
      </div>

      <div className="sock-options">
        <div className="option-card">
          <h3>Выбор цвета:</h3>
          <div className="buttons">
          {["Белый", "Черный", "Красный", "Фиолетовый"].map((col) => (
          <button
          key={col}
          className={`option-btn ${col.toLowerCase()} ${color === col ? "selected" : ""}`}
          onClick={() => setColor(col)}
          >
          {col}
         </button>
         ))}
          </div>
        </div>


        <div className="option-card">
          <h3>Выбор текстуры:</h3>
          <div className="buttons">
            {["Сердечки", "Полосы", "Кораблики", "Облака"].map((pat) => (
              <button
                key={pat}
                className={`option-btn ${pattern === pat ? "selected" : ""}`}
                onClick={() => setPattern(pat)}
              >
                {pat}
              </button>
            ))}
          </div>
        </div>


        <div className="action-buttons">
          <button className="generate-btn" onClick={handleGenerate}>
            Сгенерировать
          </button>
          <button className="cart-btn" onClick={handleAddToCart}>
            <FaShoppingCart /> Добавить в корзину
          </button>
          <button className="favorite-btn" onClick={handleAddToFav}>
            <FaHeart /> Добавить в избранное
          </button>
          {message && <p className="message">{message}</p>}
        </div>
      </div>
    </div>
  );
}
