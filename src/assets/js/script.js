//script.js
import { startTimer, cardPairs } from "./game.js";

// Получаем все элементы с классом "start_second_img"
const cards = document.querySelectorAll(".start_second_img");

let flippedCards = []; // Массив для хранения перевернутых карточек
let matchedPairs = 0; // Количество пар, которые были найдены
const container = document.querySelector(".container");

// Функция для переворота карточки
function flipCard(card) {
  card.setAttribute("src", card.dataset.image);
  card.setAttribute("data-flipped", "true");
}

// Функция для скрытия карточек
function unflipCards() {
  cards.forEach((card) => {
    card.setAttribute("src", "/img/рубашка.png");
    card.setAttribute("data-flipped", "false");
  });
  flippedCards = [];
}

function showWinner({ winner }) {
  const time = document.querySelector(".start_first_timer").textContent;
  const alertPopup = document.createElement("div");
  alertPopup.classList.add("alert");

  const alertPopupWrapper = document.createElement("div");

  alertPopupWrapper.classList.add("alert-wrapper");
  alertPopupWrapper.innerHTML = `
          <img src="img/${winner ? "celebration" : "dead"}.png" alt="" />
          <h3 class="alert-wrapper-title">Вы ${
            winner ? "выиграли" : "проиграли"
          } !</h3>
          <p class="alert-wrapper-text">Затраченное время:</p>
          <div class="alert-wrapper-time">
            ${time}
          </div>
          <button class="alert-wrapper-button">Играть снова</button>
        `;

  container.appendChild(alertPopup);
  container.appendChild(alertPopupWrapper);

  const restartGame = document.querySelector(".alert-wrapper-button");

  restartGame.addEventListener("click", () => {
    container.removeChild(alertPopup);
    container.removeChild(alertPopupWrapper);
    unflipCards();
    startTimer();
  });
}

// Функция для обработки клика на карточку
function handleCardClick(event) {
  const card = event.target;

  if (card.dataset.flipped === "false" && flippedCards.length < 2) {
    flipCard(card);
    flippedCards.push(card);

    if (flippedCards.length === 2) {
      if (flippedCards[0].dataset.image === flippedCards[1].dataset.image) {
        setTimeout(() => {
          // Карты совпали
          matchedPairs++;
          flippedCards = [];

          // длинна массива сгенерированных карт
          if (matchedPairs === cardPairs.length / 2) {
            startTimer(true);
            showWinner({ winner: true });
          }
        }, 1000); // Задержка перед проверкой
      } else {
        // Карты не совпали
        startTimer(true);
        showWinner({ winner: false });
      }
    }
  }
}

// Добавляем обработчик клика на каждую карточку
cards.forEach((card) => {
  card.addEventListener("click", handleCardClick);
});

// Добавляем обработчик клика на кнопки выбора уровня сложности
const levelButtons = document.querySelectorAll(".content_btn_item");
let selectedButton = null;
levelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedLevel = button.getAttribute("data-level");

    // Удаляем класс "selected" у всех кнопок
    levelButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    // Добавляем класс "selected" только к выбранной кнопке
    button.classList.add("selected");

    // Обновляем выбранную кнопку
    selectedButton = button;

    localStorage.setItem("selectedLevel", selectedLevel); // Сохраняем выбранный уровень в localStorage
  });
});

// Добавляем обработчик клика на кнопку "Старт"
const startButton = document.querySelector(".content_start");
startButton.addEventListener("click", () => {
  const selectedLevel = localStorage.getItem("selectedLevel");

  if (!selectedLevel) {
    alert("Пожалуйста, выберите уровень сложности перед началом игры.");
    return;
  }

  window.location.href = `/start.html`; // Переход на страницу start.html после выбора уровня
});
