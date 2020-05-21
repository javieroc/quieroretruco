import styles from './Player.module.css'

interface Props {
  data: {
    hand: string[],
    image: string,
    position: number,
    actives: number,
  }
}

function Player({ data }: Props) {
  return (
    <div className={`${styles.playerContainer} ${styles[`player${data.actives}-${data.position}`]}`}>
      <div className={styles.player}>
        <img src={`/${data.image}`} className={styles.playerImage} />
        <h3>Jugador de prueba</h3>
      </div>
      <div className={styles.cards}>
        <img src="/cards/back.png" className={styles.cardImage} />
        <img src="/cards/back.png" className={styles.cardImage} />
        <img src="/cards/back.png" className={styles.cardImage} />
      </div>
    </div>
  )
}

export default Player