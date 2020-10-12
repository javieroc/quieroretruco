import styles from './MatchList.module.css'

interface match {
  id: string,
  score: {
    us: number,
    they: number,
  },
  status: string,
  players: string[],
  settings: {
    limit: number,
    game_format: string
  }
}

function MatchList(props) {
  const { matches } = props
  return (
    <div className={styles.gameList}>
      {matches.map((match: match, i) => (
        <div className={styles.gameCard} key={match._id.$oid}>
          <h3 className={styles.gameCardTitle}>{`Game #${i}`}<button>Join</button></h3>
          <div>{`Nos: ${match.score.us} / Ellos: ${match.score.they}`}</div>
          <div>{`Status: ${match.status}`}</div>
          <div>{`N° players: ${match.players.length}`}</div>
          <div>{`Limit: ${match.settings ? match.settings.limit : '-'}`}</div>
          <div>{`Format: ${match.settings ? match.settings.game_format : '-'}`}</div>
        </div>
      ))}
    </div>
  );
}

export default MatchList
