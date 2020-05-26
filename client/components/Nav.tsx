import styles from './Nav.module.css'

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>QuieroReTruco</div>
      <ul className={styles.menu}>
        <li className={styles.menuItems}>Reglas</li>
        <li className={styles.menuItems}>Historia</li>
        <li className={styles.menuItems}>Feedback</li>
      </ul>
    </nav>
  )
}

export default Nav