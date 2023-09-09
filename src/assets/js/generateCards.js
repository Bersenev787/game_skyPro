export const generateCardPairs = (level) => {
  const numPairs = parseInt(level) * 6; // Количество пар карт в зависимости от уровня
  // Генерация пар карт
  const suits = ["spades", "diamonds", "hearts", "cross"];
  const ranks = ["ace", "king", "queen", "jack", "10", "9", "8", "7", "6"];
  let cardPairs = [];

  while (cardPairs.length < numPairs) {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const image = `${rank}_${suit}.png`;

    if (!cardPairs.includes(image)) {
      cardPairs.push(image);
      cardPairs.push(image);
    }
  }

  return cardPairs.sort(() => Math.random() - 0.5);
};
