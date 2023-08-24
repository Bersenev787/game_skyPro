//script.js

let selectedDifficulty = null;

const difficultyButtons = document.querySelectorAll(".content_btn_item");
difficultyButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Убираем стиль у всех кнопок
    difficultyButtons.forEach((btn) => {
      btn.classList.remove("selected");
    });

    // Добавляем стиль к выбранной кнопке
    button.classList.add("selected");

    selectedDifficulty = button.textContent;
    console.log(`Выбран уровень сложности: ${selectedDifficulty}`);
  });
});

const startButton = document.querySelector(".content_start");
startButton.addEventListener("click", () => {
  if (selectedDifficulty !== null) {
    navigateToGameScreen(selectedDifficulty);
    window.location.href = "start.html";
  } else {
    console.log("Выберите уровень сложности");
  }
});

function navigateToGameScreen(difficulty) {
  console.log(`Переход на игровой экран для уровня сложности ${difficulty}`);
}

//обработчик кнопки "Старт"
startButton.addEventListener("click", () => {
  if (selectedDifficulty !== null) {
    navigateToGameScreen(selectedDifficulty);
  } else {
    console.log("Выберите уровень сложности");
  }
});
