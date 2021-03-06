import { useState, useEffect } from 'react'
import Router from 'next/router'
import Cookies from 'js-cookie'
import Layout from '../components/Layout'
import Modal from '../components/Modal'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import MatchList from '../components/MatchList'
import Rules from '../components/Rules'
import Footer from '../components/Footer'
import { isAuthenticated } from '../utils/auth'
import { getData } from '../utils/api'
import styles from './home.module.css'

function Home(props) {
  const [displayModal, setDisplayModal] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('')
  const [matches, setMatches] = useState([])

  function handleModal() {
    Cookies.set('username', username)
    setDisplayModal(false)
    Router.push('/games/1')
  }

  async function fetchData () {
    const matches = await getData('/matches')

    setMatches(matches)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Layout>
      <div className={styles.home}>
        <Nav isAuthenticated={props.isAuthenticated} />

        <Hero setDisplayModal={setDisplayModal} />

        <Modal show={displayModal} handleModal={handleModal}>
          <input type="text" name="username" className={styles.username} onChange={(e) => setUsername(e.target.value)} />
        </Modal>

        <MatchList matches={matches} />

        <Rules />

        <Footer />
      </div>
    </Layout>
  )
}

export async function getServerSideProps (context) {
  return {
    props: {
      isAuthenticated: isAuthenticated(context)
    }
  }
}

export default Home;
