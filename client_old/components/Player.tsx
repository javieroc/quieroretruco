import Card from './Card'
import styles from './Player.module.css'

interface Props {
  data: {
    hand: string[],
    name: string,
    image: string,
    position: number,
    actives: number,
  }
}

function Player({ data }: Props) {
  return (
    <div className={`${styles.playerContainer} ${styles[`player${data.actives}-${data.position}`]}`}>
      <div className={styles.player}>
        <img src={`/img/${data.image}`} className={styles.playerImage} />
        <h3>{data.name}</h3>
      </div>
      <div className={styles.cards}>
        {data.hand.map((card, i) => <Card key={i} image={card} />)}
      </div>
    </div>
  )
}

export default Player
