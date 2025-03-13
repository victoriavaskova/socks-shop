import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import axios from "axios";
import "./CreateSockForm.css";

export default function CreateSockForm() {
  const [color, setColor] = useState("white");
  const [pattern, setPattern] = useState("");
  const [sockImage, setSockImage] = useState("/white.png");


  const handleGenerate = () => {
    axios
      .post("/api/createsocks", { color, pattern })
      .then((response) => {
        console.log({ color, pattern })
        console.log("Сгенерировано:", response.data);
        setSockImage(response.data.image);
      })
      .catch((error) => {
        console.log({ color, pattern })
        console.error("Ошибка генерации:", error);
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
                className={`option-btn ${color === col ? "selected" : ""}`}
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
          <button className="cart-btn">
            <FaShoppingCart /> Добавить в корзину
          </button>
          <button className="favorite-btn">
            <FaHeart /> Добавить в избранное
          </button>
        </div>
      </div>
    </div>
  );
}
