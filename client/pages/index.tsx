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

        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1>Gran Truco Argentino</h1>
            <div>
              <button className={styles.button} onClick={() => setDisplayModal(true)}>Jugar Ahora</button>
            </div>
          </div>

          <div className={styles.cards}>
            <img className={styles.card1} src="/img/cards/1-espada.png" />
            <img className={styles.card2} src="/img/cards/1-copa.png" />
            <img className={styles.card3} src="/img/cards/1-basto.png" />
            <img className={styles.card4} src="/img/cards/1-oro.png" />
          </div>
        </div>

        <Modal show={displayModal} handleModal={handleModal}>
          <input type="text" name="username" className={styles.username} onChange={(e) => setUsername(e.target.value)} />
        </Modal>

        <div className={styles.rules}>
          <h2>Reglas Truco argentino</h2>
          <h3>Introducción</h3>
          <p>El truco es un juego de cartas de origen árabe muy popular en Argentina, Brasil, Uruguay, en el levante español y en buena parte de sudamérica.</p>

          <h3>Objetivo del juego</h3>
          <p>El truco argentino se juega a 2 jugadores o por parejas y se utiliza la baraja española de 40 cartas.</p>
          <p>El objetivo del juego es ganar un número determinado de chicos (1, 2 ó 3 chicos). Cada chico se puede jugar a 15 ó 30 puntos. La primera mitad de los puntos se les llama popularmente “malas”, y a la segunda “buenas”.</p>
          <p>Los puntos se consiguen mediante los trucos y los envites, que son apuestas que se van realizando en el transcurso de las diferentes manos de cada ronda.</p>

          <h3>Valor de las cartas (de mayor a menor)</h3>
          <ul>
            <li>As de espadas (también llamado “la mayor”)</li>
            <li>As de bastos</li>
            <li>Siete de espadas (manilla de espadas)</li>
            <li>Siete de oros (manilla de oros)</li>
            <li>Treses</li>
            <li>Doses</li>
            <li>As de oros y as de copas (llamados “ases falsos”)</li>
            <li>Doces</li>
            <li>Onces</li>
            <li>Dieces</li>
            <li>Siete de copas y siete de bastos (llamados “sietes falsos” o “malos”)</li>
            <li>Seises</li>
            <li>Cincos</li>
            <li>Cuatros</li>
          </ul>

          <h3>Cómo jugar al truco argentino</h3>
          <p>Al principio de la partida se decide por sorteo automático el jugador que es mano, es decir, el que empieza a jugar. En la siguiente ronda (si la hay) empezaría el jugador situado a la derecha del actual.</p>
          <p>En cada ronda, se reparten 3 cartas a cada jugador y todos tiran una carta por turnos. El jugador con la carta de mayor valor ganará dicha mano y tirará primero en la siguiente (en caso de empate el jugador anterior será el primero en tirar). La primera pareja o jugador que gana 2 manos, gana la ronda.</p>
          <p>Por ejemplo, si una pareja gana la primera mano y empata la segunda, gana la ronda.</p>
          <p>Casos especiales:</p>
          <ul>
            <li>Si se empata la primera mano ganará aquel jugador o pareja que gane cualquiera de las dos manos restantes.</li>
            <li>Si se gana una mano, se pierde otra y se empata la 3ª, gana el jugador o pareja que ha ganado la primera mano.</li>
            <li>Si se empatan las 3 manos seguidas, ganará la ronda el jugador mano.</li>
          </ul>

          <h3>El truco</h3>
          <p>El truco es una apuesta que se puede realizar en cualquier momento de la partida y la cobra el ganador de la ronda.</p>
          <p>La pareja o jugador contrario debe responder con una de las siguientes opciones:</p>
          <ul>
            <li>No quiero. Rechaza el truco y la pareja contraria gana la ronda.</li>
            <li>Quiero. Acepta la apuesta la cual se resolverá al final de la ronda.</li>
            <li>Retruco, Vale cuatro. Sube la apuesta y pasa el turno a la pareja contraria para que decida.</li>
          </ul>

          <h3>El envido</h3>
          <p>Esta apuesta la gana el jugador que consigue ligar 2 cartas del mismo palo cuya suma sea la más alta. En este caso, los sietes son las cartas de mayor valor, y los ases las más bajas. Además, sólo se puede realizar en la primera mano y siempre antes del truco.</p>
          <ul>
            <li>Si se tienen 2 cartas del mismo palo, se suma su valor + 20 (de ahí la importancia de ligar dos cartas del mismo palo). La puntuación más alta del envido es 33 (7+6+20=33).</li>
            <li>Las figuras o cartas negras (sota, caballo y rey) valen 0 puntos para el envido. Si se tienen 2 figuras del mismo palo la puntuación de envido es 20.</li>
            <li>Si nadie tiene 2 cartas del mismo palo, se cuenta la carta más alta.</li>
            <li>En caso de empate, gana el jugador que va de mano.</li>
          </ul>
          <p>Ejemplo: un 7 de copas pierde contra un 3 y un 1 de espadas (3+1+20=24 de envido)</p>
          <p>En el envido es importante saber si se está en “buenas” o “malas”. En “buenas” al menos un jugador o pareja ya tiene la mitad de puntos. En “malas” todavía nadie ha llegado a la mitad.</p>
          <p>La pareja o jugador contrario debe responder con una de las siguientes opciones:</p>
          <ul>
            <li>No quiero. Rechaza la apuesta y la pareja que ha envidado suma los puntos apostados hasta ese momento.</li>
            <li>Quiero. Acepta la apuesta que se resolverá al final de la ronda.</li>
            <li>Envido, Real envido, Falta. Sube la apuesta y pasa el turno al jugador o pareja contraria para que decida. Ver tabla a continuación.</li>
          </ul>

          <p>La falta es la apuesta máxima del envido y la puntuación conseguida depende del estado de la partida:</p>
          <ul>
            <li>Si se está en “malas”, el jugador o pareja ganadora del envite gana el chico.</li>
            <li>Si se está en “buenas”, el jugador o pareja ganadora se lleva los puntos que le faltan al jugador o pareja con más puntos para conseguir el chico.</li>
          </ul>
          <p>Ejemplo: en una partida a 30 puntos, una pareja tiene 10 puntos y la otra 20; en la falta se apostarían 10 puntos por estar en “buenas” (30-20=10).</p>
          <p>El envido se juega antes que el truco, por tanto, si una pareja llega a los puntos de un chico sumando los puntos del envido, gana el chico y el truco no se tiene en cuenta.</p>
          <p>Ejemplo: en una partida a 30 puntos, una pareja tiene 28 puntos y la otra 26; la primera gana un envido de 2 puntos y la segunda gana un truco de 4 puntos; gana la primera pareja con el envido.</p>

          <h3>Jugar las cartas tapadas</h3>
          <p>Tirar una carta tapada puede resultar útil para engañar a los contrarios y esconder tu jugada.</p>
          <p>¡Atención! Si tiras una carta tapada, esa carta pierde su valor (todas las cartas le ganan y sólo puede empatar con otra carta tapada).</p>
        </div>

        <footer className={styles.footer}>
          <div>Development by Dev&Coffee</div>
        </footer>
      </div>
    </Layout>
  )
}

export default Home;
