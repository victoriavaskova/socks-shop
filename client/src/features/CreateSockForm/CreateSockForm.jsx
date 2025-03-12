import { useState } from "react";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import "./CreateSockForm.css";

export default function CreateSockForm() {
  const [color, setColor] = useState("white");
  const [pattern, setPattern] = useState("");

  const handleGenerate = () => {
    fetch("http://localhost:5000/api/generate-sock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ color, pattern }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Сгенерировано:", data))
      .catch((err) => console.error("Ошибка генерации:", err));
  };

  return (
    <div className="sock-generator">
      <div className="sock-preview">
        <img src="/white.png" alt="Носок" />
      </div>


      <div className="sock-options">
        <div className="option-card">
          <h3>Выбор цвета:</h3>
          <div className="buttons">
            {["white", "black", "red", "purple"].map((col) => (
              <button
                key={col}
                className={`option-btn ${col} ${color === col ? "selected" : ""}`}
                onClick={() => setColor(col)}
              >
                {col === "white" ? "Белый" : col === "black" ? "Черный" : col === "red" ? "Красный" : "Фиолетовый"}
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
