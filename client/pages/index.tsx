import { useState } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import Nav from '../components/Nav'
import styles from './home.module.css'

function Home() {
  const [displayModal, setDisplayModal] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')

  function handleModal() {
    Cookies.set('username', username)
    setDisplayModal(false)
    Router.push('/games/1')
  }

  return (
    <Layout>
      <div className={styles.home}>
        <Nav />

        <img src="/1-espada.png" />
        <div>
          <button className={styles.button} onClick={() => setDisplayModal(true)}>Jugar</button>
        </div>

        <Modal show={displayModal} handleModal={handleModal}>
          <input type="text" name="username" className={styles.username} onChange={(e) => setUsername(e.target.value)} />
        </Modal>
      </div>
    </Layout>
  )
}

export default Home;
