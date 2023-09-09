const container = document.querySelector(".container");
const content = document.createElement("div");
content.classList.add("content");

export const enterPage = () => {
  content.innerHTML = `
    <h1 class="content_header">Выбери сложность</h1>
    <div class="content_btn">
      <button class="content_btn_item" data-level="1">1</button>
      <button class="content_btn_item" data-level="2">2</button>
      <button class="content_btn_item" data-level="3">3</button>
    </div>
    <button class="content_start">Старт</button>
  `;

  container.appendChild(content);
  getLevel();
  startGame();
};

const removeSelect = (buttons) => {
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });
};

const generateCardPairs = (level) => {
  const numPairs = parseInt(level) * 6; // Количество пар карт в зависимости от уровня
  // Генерация пар карт
  const suits = ["spades", "diamonds", "hearts", "cross"];
  const ranks = ["ace", "king", "queen", "jack", "10", "9", "8", "7", "6"];
  cardPairs = [];

  while (cardPairs.length < numPairs) {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const image = `${rank}_${suit}.png`;

    if (!cardPairs.includes(image)) {
      cardPairs.push(image);
      cardPairs.push(image);
    }
  }

  console.log(cardPairs);

  return cardPairs.sort(() => Math.random() - 0.5);
};

// Добавляем обработчик клика на кнопки выбора уровня сложности
export const getLevel = () => {
  const levelButtons = document.querySelectorAll(".content_btn_item");
  let selectedButton = null;

  removeSelect(levelButtons);

  levelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLevel = button.getAttribute("data-level");

      // Удаляем класс "selected" у всех кнопок
      removeSelect(levelButtons);

      // Добавляем класс "selected" только к выбранной кнопке
      button.classList.add("selected");

      // Обновляем выбранную кнопку
      selectedButton = button;

      localStorage.setItem("selectedLevel", selectedLevel); // Сохраняем выбранный уровень в localStorage
    });
  });
};

let cardPairs = [];

// Добавляем обработчик клика на кнопку "Старт"
export const startGame = () => {
  const startButton = document.querySelector(".content_start");

  startButton.addEventListener("click", () => {
    // Получаем уровень сложности из localStorage
    const selectedLevel = localStorage.getItem("selectedLevel");

    if (!selectedLevel) {
      alert("Пожалуйста, выберите уровень сложности перед началом игры.");
      return;
    }

    const cardsList = generateCardPairs(selectedLevel).map((card) => {
      return `
          <img
            class="start_second_img"
            data-flipped="true"
            data-image="../img/${card}"
            src="../img/${card}"
            alt="Card"
          />
        `;
    });
    const startGameField = document.createElement("div");
    startGameField.classList.add("start");
    startGameField.innerHTML = `
      <div class="start_first">
        <div class="start_first_timer">00:00</div>
        <button class="start_first_btn">Начать заново</button>
      </div>
      <div class="start_second">
        ${cardsList.join("")}
      </div>
    `;

    container.removeChild(content);
    container.appendChild(startGameField);

    const cards = document.querySelectorAll(".start_second_img");
    let flippedCards = []; // Массив для хранения перевернутых карточек
    let matchedPairs = 0; // Количество пар, которые были найдены

    cards.forEach((card, index) => {
      card.setAttribute("data-flipped", true);
      setTimeout(() => {
        card.setAttribute("data-flipped", false);
        card.src = "../img/shirt.png";
      }, 5000);
    });

    // Добавляем обработчик клика на каждую карточку
    cards.forEach((card) => {
      card.addEventListener("click", handleCardClick);
    });
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
                console.log("winner");
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

    // Функция для переворота карточки
    function flipCard(card) {
      card.setAttribute("src", card.dataset.image);
      card.setAttribute("data-flipped", "true");
    }

    function showWinner({ winner }) {
      const time = document.querySelector(".start_first_timer").textContent;
      const alertPopup = document.createElement("div");
      alertPopup.classList.add("alert");

      const alertPopupWrapper = document.createElement("div");

      alertPopupWrapper.classList.add("alert-wrapper");
      alertPopupWrapper.innerHTML = `
              <img src="../img/${winner ? "celebration" : "dead"}.png" alt="" />
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

    // Функция для скрытия карточек
    function unflipCards() {
      cards.forEach((card) => {
        card.setAttribute("src", "../img/shirt.png");
        card.setAttribute("data-flipped", "false");
      });
      flippedCards = [];
      matchedPairs = 0;
    }

    // Начать заново
    const startNewGame = document.querySelector(".start_first_btn");
    startNewGame?.addEventListener("click", () => {
      localStorage.removeItem("selectedLevel");
      clearInterval(timerInterval);
      timerInterval = null;
      container.removeChild(startGameField);
      container.appendChild(content);
      getLevel();
    });
  });
};
