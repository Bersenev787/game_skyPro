/** @format */

type CardPairs = string[];
type Suits = string[];
type Ranks = string[];

export const generateCardPairs = (level: string): CardPairs => {
  const numPairs: number = parseInt(level) * 6; // Количество пар карт в зависимости от уровня
  // Генерация пар карт
  const suits: Suits = ['spades', 'diamonds', 'hearts', 'cross'];
  const ranks: Ranks = [
    'ace',
    'king',
    'queen',
    'jack',
    '10',
    '9',
    '8',
    '7',
    '6',
  ];
  const cardPairs: CardPairs = [];

  while (cardPairs.length < numPairs) {
    const suit: string = suits[Math.floor(Math.random() * suits.length)];
    const rank: string = ranks[Math.floor(Math.random() * ranks.length)];
    const image: string = `${rank}_${suit}.png`;

    if (!cardPairs.includes(image)) {
      cardPairs.push(image);
      cardPairs.push(image);
    }
  }

  return cardPairs.sort(() => Math.random() - 0.5);
};
