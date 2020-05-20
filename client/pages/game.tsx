import Layout from '../components/Layout'
import Table from '../components/Table'

const players = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];

function Game() {
  return (
    <Layout>
      <Table players={players} />
    </Layout>
  )
}

export default Game