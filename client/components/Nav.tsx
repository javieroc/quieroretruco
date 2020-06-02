import styles from './Nav.module.css'

function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>QuieroReTruco</div>
      <ul className={styles.menu}>
        <li className={styles.menuItems}>Reglas</li>
        <li className={styles.menuItems}>Github</li>
        <li className={styles.menuItems}>Feedback</li>
      </ul>
    </nav>
  )
}

export default Nav