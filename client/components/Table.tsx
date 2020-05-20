import Player from './Player'
import styles from './Table.module.css'

const players = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];

function Table() {
  return (
    <div className={styles.table}>
      <div className={styles.players}>
        {players.map((p, i) => <Player key={i} data={{ image: `${p}.jpg`, position: i + 1 }} />)}
      </div>
    </div>
  )
}

export default Table