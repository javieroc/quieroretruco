const cardsTypes = ['oro', 'copa', 'espada', 'basto']
const cardsNumbers = [1, 2, 3, 4, 5, 6, 7, 10, 11, 12]

function shuffle(array: string[]): string[] {
  return array.sort(() => Math.random() - 0.5)
}

export function generateHands(numOfPlayers: number): string[][] {
  const cards = cardsTypes.reduce((res, cardType) => [...res, ...cardsNumbers.map((cardNumber) => `${cardNumber}-${cardType}`)], [])
  const cardsShuffled = shuffle(cards)
  const res: string[][] = Array(numOfPlayers).fill(0).map((_) => [])
  for (let i = 1; i <= numOfPlayers * 3; i += 1) {
    res[i % numOfPlayers].push(cardsShuffled.shift())
  }
  return res
}
