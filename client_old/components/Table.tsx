import Player from './Player'
import styles from './Table.module.css'

interface Player {
  hand: string[],
  image: string,
  name: string,
  position: number
}

interface Props {
  players: Player[]
}

function Table({ players }: Props) {
  const numOfPlayers = players.length
  const waitingPlayer = players.length % 2 === 0 ? null : players[numOfPlayers - 1]
  const activePlayers = players.length % 2 === 0 ? [...players] : players.slice(0, numOfPlayers - 1)

  return (
    <div className={styles.tableContainer}>
      {waitingPlayer && <div className={styles.waitingPlayer}>
        <img src={`/img/${waitingPlayer.image}`} className={styles.waitingPlayerImage} />
        <h3 className={styles.waitingPlayerName}>{waitingPlayer.name}<span>  esperando compañer@...</span></h3>
      </div>}

      <div className={styles.table}>
        <div className={styles.players}>
          {activePlayers.map((p, i) => <Player key={i} data={{ ...p, actives: activePlayers.length }} />)}
        </div>
      </div>
    </div>
  )
}

export default Table
