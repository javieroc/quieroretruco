import Link from 'next/link'
import Router from 'next/router'
import Cookies from 'js-cookie'
import styles from './Nav.module.css'

function Nav({ isAuthenticated }) {
  async function logout() {
    Cookies.remove('auth')
    await Router.push('/')
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>QuieroReTruco</div>
      <ul className={styles.menu}>
        <li className={styles.menuItems}>
          <a href="/#" className={styles.link}>Reglas</a>
        </li>
        <li className={styles.menuItems}>
          <a href='https://github.com/javieroc/quieroretruco' target='_blank' className={styles.link}>Github</a>
        </li>
        <li className={styles.menuItems}>
          <a href="/#" className={styles.link}>Feedback</a>
        </li>
        {isAuthenticated && <li className={styles.menuItems}><a href="#" onClick={logout} className={styles.link}>Logout</a></li>}
        {!isAuthenticated && <li className={styles.menuItems}>
            <Link href="/login">
              <a className={styles.link}>Sign in</a>
            </Link>
          </li>}
          {!isAuthenticated && <li className={styles.menuItems}>
            <Link href="/register">
              <a className={styles.link}>Sign up</a>
            </Link>
          </li>}
      </ul>
    </nav>
  )
}

export default Nav