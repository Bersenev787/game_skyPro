/** @format */

import { getLevel } from './selectLevel';
import { generateCardPairs } from './generateCards';

const container = document.querySelector('.container');
const content = document.createElement('div');
content.classList.add('content');

export const enterPage = (): void => {
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

// Добавляем обработчик клика на кнопку "Старт"
export const startGame = (): void => {
  const startButton: Element | null = document.querySelector('.content_start');

  startButton.addEventListener('click', () => {
    // Получаем уровень сложности из localStorage
    const selectedLevel: string | null = localStorage.getItem('selectedLevel');

    if (!selectedLevel) {
      alert('Пожалуйста, выберите уровень сложности перед началом игры.');
      return;
    }

    const cardsList: string[] = generateCardPairs(selectedLevel).map((card) => {
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
    const startGameField: HTMLDivElement = document.createElement('div');
    startGameField.classList.add('start');
    startGameField.innerHTML = `
      <div class="start_first">
        <div class="start_first_timer">00:00</div>
        <button class="start_first_btn">Начать заново</button>
      </div>
      <div class="start_second">
        ${cardsList.join('')}
      </div>
    `;

    container.removeChild(content);
    container.appendChild(startGameField);

    const cards: NodeListOf<Element> =
      document.querySelectorAll('.start_second_img');
    let flippedCards: Element[] = []; // Массив для хранения перевернутых карточек
    let matchedPairs: number = 0; // Количество пар, которые были найдены

    cards.forEach((card, index) => {
      card.setAttribute('data-flipped', 'true');
      setTimeout(() => {
        card.setAttribute('data-flipped', 'false');
        card.setAttribute('src', '../img/shirt.png');
      }, 5000);
    });

    // Функция для обработки клика на карточку
    function handleCardClick(event: Event): void {
      const card: Element = event.target as Element;

      if (
        card.getAttribute('data-flipped') === 'false' &&
        flippedCards.length < 2
      ) {
        flipCard(card);
        flippedCards.push(card);

        if (flippedCards.length === 2) {
          if (
            flippedCards[0].getAttribute('data-image') ===
            flippedCards[1].getAttribute('data-image')
          ) {
            setTimeout(() => {
              // Карты совпали
              matchedPairs++;
              flippedCards = [];

              // длинна массива сгенерированных карт
              if (matchedPairs === cardsList.length / 2) {
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
      card.addEventListener('click', handleCardClick);
    });

    // Функция для переворота карточки
    function flipCard(card: Element): void {
      card.setAttribute('src', card.getAttribute('data-image') || '');
      card.setAttribute('data-flipped', 'true');
    }

    function showWinner({ winner }: { winner: boolean }) {
      const time: string | null =
        document.querySelector('.start_first_timer').textContent;
      const alertPopup: HTMLDivElement = document.createElement('div');
      alertPopup.classList.add('alert');

      const alertPopupWrapper: HTMLDivElement = document.createElement('div');

      alertPopupWrapper.classList.add('alert-wrapper');
      alertPopupWrapper.innerHTML = `
              <img src="../img/${winner ? 'celebration' : 'dead'}.png" alt="" />
              <h3 class="alert-wrapper-title">Вы ${
                winner ? 'выиграли' : 'проиграли'
              } !</h3>
              <p class="alert-wrapper-text">Затраченное время:</p>
              <div class="alert-wrapper-time">
                ${time}
              </div>
              <button class="alert-wrapper-button">Играть снова</button>
            `;

      container.appendChild(alertPopup);
      container.appendChild(alertPopupWrapper);

      const restartGame: Element | null = document.querySelector(
        '.alert-wrapper-button',
      );

      restartGame.addEventListener('click', () => {
        container.removeChild(alertPopup);
        container.removeChild(alertPopupWrapper);
        unflipCards();
        startTimer();
      });
    }

    const timerElement: Element | null =
      document.querySelector('.start_first_timer');
    let timerInterval; // Переменная для хранения интервала таймера
    let seconds: number = 0;
    let minutes: number = 0;

    // Функция для обновления таймера
    function updateTimer(): void {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      const formattedMinutes: number | string =
        minutes < 10 ? `0${minutes}` : minutes;
      const formattedSeconds: number | string =
        seconds < 10 ? `0${seconds}` : seconds;

      timerElement.textContent = `${formattedMinutes}:${formattedSeconds}`;
    }

    function startTimer(restart: boolean = false): void | undefined {
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
    function unflipCards(): void {
      cards.forEach((card) => {
        card.setAttribute('src', '../img/shirt.png');
        card.setAttribute('data-flipped', 'false');
      });
      flippedCards = [];
      matchedPairs = 0;
    }

    // Начать заново
    const startNewGame: Element | null =
      document.querySelector('.start_first_btn');
    startNewGame?.addEventListener('click', () => {
      localStorage.removeItem('selectedLevel');
      clearInterval(timerInterval);
      timerInterval = null;
      container.removeChild(startGameField);
      container.appendChild(content);
      getLevel();
    });
  });
};
