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
  const waitingPlayer = players.length % 2 === 0 ? players[numOfPlayers - 1] : null
  const activePlayers = players.length % 2 === 0 ? [...players] : players.slice(0, numOfPlayers)

  return (
    <div className={styles.table}>
      <div className={styles.players}>
        {activePlayers.map((p, i) => <Player key={i} data={{ ...p, actives: activePlayers.length }} />)}
      </div>
    </div>
  )
}

export default Table
