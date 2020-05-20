import styles from './Player.module.css'

interface Props {
  data: {
    image: string,
    position: number
  }
}

function Player({ data }: Props) {
  return (
    <div className={`${styles.playerContainer} ${styles['player' + data.position]}`}>
      <div className={styles.player}>
        <img src={`/${data.image}`} className={styles.playerImage} />
        <h3>Jugador de prueba</h3>
      </div>
      <div className={styles.cards}>
        <img src="/cards/back.png" />
        <img src="/cards/back.png" />
        <img src="/cards/back.png" />
      </div>
    </div>
  )
}

export default Player