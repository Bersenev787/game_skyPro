// Добавляем обработчик клика на кнопки выбора уровня сложности
export const getLevel = (): void => {
  const levelButtons: NodeListOf<Element> =
    document.querySelectorAll(".content_btn_item");
  let selectedButton = null;

  removeSelect(levelButtons);

  levelButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedLevel: string | null = button.getAttribute("data-level");

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

const removeSelect = (buttons: NodeListOf<Element>): void => {
  buttons.forEach((btn) => {
    btn.classList.remove("selected");
  });
};
