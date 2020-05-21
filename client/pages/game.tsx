import Layout from '../components/Layout'
import Table from '../components/Table'
import { generateHands } from '../utils'

const playersFakes = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];
const numOfPlayers = 6

function Game() {
  const hands = generateHands(numOfPlayers)
  const players = playersFakes.map((p, i) => ({
    hand: hands[i],
    image: p + '.jpg',
    name: p,
    position: i + 1
  }))

  return (
    <Layout>
      <Table players={players} />
    </Layout>
  )
}

export default Game
