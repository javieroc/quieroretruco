import styles from './GameList.module.css'

interface Player {
  nickname: string,
  image: string
}

interface Game {
  id: string,
  score: {
    us: number,
    they: number,
  },
  status: string,
  players: Player[],
  settings: {
    limit: number,
    gameFormat: string
  }
}

const getGame = (id) => ({
  id: 1,
  score: {
    us: 10,
    they: 15,
  },
  status: 'playing',
  players: [
    {
      nickname: `player-${id}`,
      image: `https://i.pravatar.cc/40?u=player-${id}`
    },
    {
      nickname: `player-${id + 1}`,
      image: `https://i.pravatar.cc/40?u=player-${id + 1}`
    },
  ],
  settings: {
    limit: 30,
    gameFormat: 'no-flor'
  }
})

const games = Array(10).fill(0).map((_, i) => getGame(i))

function GameList(props) {
  return (
    <div className={styles.gameList}>
      {games.map(g => (
        <div className={styles.gameCard}>
          <h3 className={styles.gameCardTitle}>{`Game #${g.id}`}<button>Join</button></h3>
          <div>{`Nos: ${g.score.us} / Ellos: ${g.score.they}`}</div>
          <div>{`Status: ${g.status}`}</div>
          <div>{`N° players: ${g.players.length}`}</div>
          <div>{`Limit: ${g.settings.limit}`}</div>
          <div>{`Format: ${g.settings.gameFormat}`}</div>
        </div>
      ))}
    </div>
  );
}

export default GameList
