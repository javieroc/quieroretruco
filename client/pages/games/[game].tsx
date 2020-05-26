import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import io from "socket.io-client";
import Cookies from 'js-cookie'
import Layout from '../../components/Layout'
import Table from '../../components/Table'
import { generateHands } from '../../utils'
import styles from './game.module.css'

const socket = io('http://localhost:8001');
const images = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];

function Game() {
  const [players, setPlayers] = useState([])
  const router = useRouter()
  const { game } = router.query
  const username = Cookies.get('username')

  useEffect(() => {
    if (game) {
      socket.emit('join game', { game, username });
    }

    return () => {
      if (game) {
        socket.emit('leave game', { game, username });
      }
    }
  }, [game]);

  useEffect(() => {
    socket.on('join game', (data) => {
      if (data) {
        const json = JSON.parse(data)
        const numOfPlayers = json.game.length
        const hands = generateHands(numOfPlayers)
        const meIndex = json.game.indexOf(username)
        const playersReOrdered = [...json.game.slice(meIndex), ...json.game.slice(0, meIndex)]
        const playersUpdated = playersReOrdered.map((p, i) => ({
          hand: hands[i],
          image: images[i] + '.jpg',
          name: p,
          position: i + 1
        }))
        setPlayers([...playersUpdated])
      }
    })
  }, [players]);

  console.log('players', players)
  return (
    <Layout>
      <div className={styles.game}>
        <Table players={players} />
      </div>
    </Layout>
  )
}

export default Game
