import styles from './Hero.module.css'

export default function Hero(props) {
  const { setDisplayModal } = props

  return (
    <div className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1>Gran Truco Argentino</h1>
        <div>
          <button className={styles.button} onClick={() => setDisplayModal(true)}>Jugar Ahora</button>
        </div>
      </div>

      <div className={styles.cards}>
        <img className={styles.card1} src="/img/cards/1-espada.png" />
        <img className={styles.card2} src="/img/cards/1-oro.png" />
        <img className={styles.card3} src="/img/cards/1-basto.png" />
        <img className={styles.card4} src="/img/cards/1-copa.png" />
      </div>
    </div>
  )
}