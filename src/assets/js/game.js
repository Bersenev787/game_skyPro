// game.js

// Получаем уровень сложности из localStorage
const selectedLevel = localStorage.getItem("selectedLevel");
const numPairs = parseInt(selectedLevel) * 6; // Количество пар карт в зависимости от уровня

// Генерация пар карт
const suits = ["пики", "черви", "бубны", "крести"];
const ranks = ["туз", "король", "дама", "валет", "10", "9", "8", "7", "6"];

const generateCardPairs = (numPairs) => {
  const cardPairs = [];

  while (cardPairs.length < numPairs) {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const image = `/img/${rank}_${suit}.png`;

    if (!cardPairs.includes(image)) {
      cardPairs.push(image);
      cardPairs.push(image);
    }
  }

  return cardPairs;
};

const timerElement = document.querySelector(".start_first_timer");
let timerInterval; // Переменная для хранения интервала таймера
let seconds = 0;
let minutes = 0;

// Функция для обновления таймера
function updateTimer() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
}
function startTimer(restart = false) {
  if (restart) {
    clearInterval(timerInterval);
    timerInterval = null;
    return;
  }

  seconds = 0;
  minutes = 0;
  timerInterval = setInterval(updateTimer, 1000);
  updateTimer();
}

// пока так
// Отложенный старт после показа карт
setTimeout(startTimer, 5000);

// Подготовка игрового поля
const cards = document.querySelectorAll(".start_second_img");
const cardPairs = generateCardPairs(numPairs);

cards.forEach((card, index) => {
  // показываем карты перед началом игры
  card.setAttribute("data-image", cardPairs[index]);
  card.src = cardPairs[index];

  // скрываем карты через 5 секунд
  setTimeout(() => {
    card.setAttribute("data-flipped", false);
    card.src = "../img/shirt.png";
  }, 5000);
});

// Начать заново
const startNewGame = document.querySelector(".start_first_btn");
export const newGameStart = () => {
  startNewGame?.addEventListener("click", () => {
    localStorage.removeItem("selectedLevel");
    clearInterval(timerInterval);
    timerInterval = null;
  });
};

export { startTimer, cardPairs };
