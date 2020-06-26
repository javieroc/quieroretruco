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
        <li className={styles.menuItems}>Reglas</li>
        <li className={styles.menuItems}>Github</li>
        <li className={styles.menuItems}>Feedback</li>
        {isAuthenticated && <li className={styles.menuItems}><a style={{color: 'white', textDecoration: 'none'}} href="#" onClick={logout}>Logout</a></li>}
        {!isAuthenticated && <li className={styles.menuItems}>
            <Link href="/login">
              <a style={{color: 'white', textDecoration: 'none'}}>Sign in</a>
            </Link>
          </li>}
          {!isAuthenticated && <li className={styles.menuItems}>
            <Link href="/register">
              <a style={{color: 'white', textDecoration: 'none'}}>Sign up</a>
            </Link>
          </li>}
      </ul>
    </nav>
  )
}

export default Nav