// game.js
let minutes = 0;
let seconds = 0;

function updateTimer() {
  seconds++;

  if (seconds === 60) {
    minutes++;
    seconds = 0;
  }

  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(updateTimer, 1000);

// JavaScript код для переворачивания карт
const cards = document.querySelectorAll(".start_second_img");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const isFlipped = card.getAttribute("data-flipped");
    if (isFlipped === "false") {
      const image = card.getAttribute("data-image");
      card.src = image;
      card.classList.add("flipped");
      card.setAttribute("data-flipped", "true");
    } else {
      card.src = "/img/рубашка.png";
      card.classList.remove("flipped");
      card.setAttribute("data-flipped", "false");
    }
  });
});
