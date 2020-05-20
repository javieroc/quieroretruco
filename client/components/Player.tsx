import styles from './Player.module.css'

interface Props {
  data: {
    image: string,
    position: number
  }
}

function Player({ data }: Props) {
  return (
    <div className={`${styles.player} ${styles['player' + data.position]}`}>
      <img src={`/${data.image}`} className={styles.playerImage} />
      <h3>Jugador de prueba</h3>
    </div>
  )
}

export default Player