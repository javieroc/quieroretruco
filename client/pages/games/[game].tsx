import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import io from "socket.io-client";
import Cookies from 'js-cookie'
import Layout from '../../components/Layout'
import Table from '../../components/Table'
import { generateHands } from '../../utils'
import styles from './game.module.css'

const playersFakes = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];
const numOfPlayers = 6

function Game() {
  const router = useRouter()
  const hands = generateHands(numOfPlayers)
  const players = playersFakes.map((p, i) => ({
    hand: hands[i],
    image: p + '.jpg',
    name: p,
    position: i + 1
  }))

  useEffect(() => {
    const socket = io('http://localhost:8001');
    const { game } = router.query
    const username = Cookies.get('username')
    console.log('game', game)

    socket.on('connect', () => {
      socket.emit('new player', { game, username });
    });
  }, []);

  return (
    <Layout>
      <div className={styles.game}>
        <Table players={players} />
      </div>
    </Layout>
  )
}

export default Game
