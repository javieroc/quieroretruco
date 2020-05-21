import Layout from '../components/Layout'
import Table from '../components/Table'
import { generateHands } from '../utils'

const players = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];

function Game() {
  const hands = generateHands(players.length)

  return (
    <Layout>
      <Table players={players} />
    </Layout>
  )
}

export default Game