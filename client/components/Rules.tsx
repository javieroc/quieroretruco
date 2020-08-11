import styles from './Rules.module.css'

function Rules() {
  return (
    <div className={styles.rules}>
      <h2>Reglas Truco argentino</h2>
      <h3>Introducción</h3>
      <p>El truco es un juego de cartas de origen árabe muy popular en Argentina, Brasil, Uruguay, en el levante español y en buena parte de sudamérica.</p>

      <h3>Objetivo del juego</h3>
      <p>El truco argentino se juega a 2 jugadores o por parejas y se utiliza la baraja española de 40 cartas.</p>
      <p>El objetivo del juego es ganar un número determinado de chicos (1, 2 ó 3 chicos). Cada chico se puede jugar a 15 ó 30 puntos. La primera mitad de los puntos se les llama popularmente “malas”, y a la segunda “buenas”.</p>
      <p>Los puntos se consiguen mediante los trucos y los envites, que son apuestas que se van realizando en el transcurso de las diferentes manos de cada ronda.</p>

      <h3>Valor de las cartas (de mayor a menor)</h3>
      <table>
        <tbody>
          <tr>
            <td className={styles.td}>As de espadas (también llamado “macho”)</td>
            <td className={styles.td}><img src="/img/cards/1-espada.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>As de bastos (también llamado “hembra”)</td>
            <td className={styles.td}><img src="/img/cards/1-basto.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Siete de espadas</td>
            <td className={styles.td}><img src="/img/cards/7-espada.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Siete de oros</td>
            <td className={styles.td}><img src="/img/cards/7-oro.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Treses</td>
            <td className={styles.td}><img src="/img/cards/3-copa.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Doses</td>
            <td className={styles.td}><img src="/img/cards/2-oro.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>As de oros y as de copas (llamados “ases falsos”)</td>
            <td className={styles.td}><img src="/img/cards/1-copa.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Doces</td>
            <td className={styles.td}><img src="/img/cards/12-basto.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>onces</td>
            <td className={styles.td}><img src="/img/cards/11-espada.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Dieces</td>
            <td className={styles.td}><img src="/img/cards/10-oro.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Siete de copas y siete de bastos (llamados “sietes falsos” o “malos”)</td>
            <td className={styles.td}><img src="/img/cards/7-basto.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Seises</td>
            <td className={styles.td}><img src="/img/cards/6-oro.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Cincos</td>
            <td className={styles.td}><img src="/img/cards/5-espada.png" width="30" /></td>
          </tr>
          <tr>
            <td className={styles.td}>Cuatros</td>
            <td className={styles.td}><img src="/img/cards/4-copa.png" width="30" /></td>
          </tr>
        </tbody>
      </table>

      <h3>Cómo jugar al truco argentino</h3>
      <p>Al principio de la partida se decide por sorteo automático el jugador que es mano, es decir, el que empieza a jugar. En la siguiente ronda (si la hay) empezaría el jugador situado a la derecha del actual.</p>
      <p>En cada ronda, se reparten 3 cartas a cada jugador y todos tiran una carta por turnos. El jugador con la carta de mayor valor ganará dicha mano y tirará primero en la siguiente (en caso de empate el jugador anterior será el primero en tirar). La primera pareja o jugador que gana 2 manos, gana la ronda.</p>
      <code>Por ejemplo, si una pareja gana la primera mano y empata la segunda, gana la ronda.</code>
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
        <li><span className={styles.keyword}>No quiero</span>. Rechaza el truco y la pareja contraria gana la ronda.</li>
        <li><span className={styles.keyword}>Quiero</span>. Acepta la apuesta la cual se resolverá al final de la ronda.</li>
        <li><span className={styles.keyword}>Retruco</span>, <span className={styles.keyword}>Vale cuatro</span>. Sube la apuesta y pasa el turno a la pareja contraria para que decida.</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th className={styles.td}>Apuesta</th>
            <th className={styles.td}>Puntos</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.td}>Si no hay apuesta</td>
            <td className={styles.td}>1 punto al ganador de la ronda</td>
          </tr>
          <tr>
            <td className={styles.td}>Truco</td>
            <td className={styles.td}>2 puntos</td>
          </tr>
          <tr>
            <td className={styles.td}>Retruco</td>
            <td className={styles.td}>3 puntos</td>
          </tr>
          <tr>
            <td className={styles.td}>Vale cuatro</td>
            <td className={styles.td}>4 puntos</td>
          </tr>
        </tbody>
      </table>

      <h3>El envido</h3>
      <p>Esta apuesta la gana el jugador que consigue ligar 2 cartas del mismo palo cuya suma sea la más alta. En este caso, los sietes son las cartas de mayor valor, y los ases las más bajas. Además, sólo se puede realizar en la primera mano y siempre antes del truco.</p>
      <ul>
        <li>Si se tienen 2 cartas del mismo palo, se suma su valor + 20 (de ahí la importancia de ligar dos cartas del mismo palo). La puntuación más alta del envido es 33 (7+6+20=33).</li>
        <li>Las figuras o cartas negras (sota, caballo y rey) valen 0 puntos para el envido. Si se tienen 2 figuras del mismo palo la puntuación de envido es 20.</li>
        <li>Si nadie tiene 2 cartas del mismo palo, se cuenta la carta más alta.</li>
        <li>En caso de empate, gana el jugador que va de mano.</li>
      </ul>
      <code>Ejemplo: un 7 de copas pierde contra un 3 y un 1 de espadas (3+1+20=24 de envido)</code>
      <p>En el envido es importante saber si se está en “buenas” o “malas”. En “buenas” al menos un jugador o pareja ya tiene la mitad de puntos. En “malas” todavía nadie ha llegado a la mitad.</p>
      <p>La pareja o jugador contrario debe responder con una de las siguientes opciones:</p>
      <ul>
        <li><span className={styles.keyword}>No quiero</span>. Rechaza la apuesta y la pareja que ha envidado suma los puntos apostados hasta ese momento.</li>
        <li><span className={styles.keyword}>Quiero</span>. Acepta la apuesta que se resolverá al final de la ronda.</li>
        <li><span className={styles.keyword}>Envido</span>, <span className={styles.keyword}>Real envido</span>, <span className={styles.keyword}>Falta</span>. Sube la apuesta y pasa el turno al jugador o pareja contraria para que decida. Ver tabla a continuación.</li>
      </ul>

      <table>
        <caption>Puntuación conseguida en el envido</caption>
        <tbody>
          <tr>
            <th className={styles.td}>Apuesta(s)</th>
            <th className={styles.td}>No quiero</th>
            <th className={styles.td}>Quiero</th>
          </tr>
          <tr>
            <td className={styles.td}>Envido</td>
            <td className={styles.td}>1 punto</td>
            <td className={styles.td}>2 puntos</td>
          </tr>
          <tr>
            <td className={styles.td}>Real envido</td>
            <td className={styles.td}>1 punto</td>
            <td className={styles.td}>3 puntos</td>
          </tr>
          <tr>
            <td className={styles.td}>Falta</td>
            <td className={styles.td}>1 punto</td>
            <td className={styles.td}><em>Ver regla más abajo</em></td>
          </tr>
          <tr>
            <td className={styles.td}>Envido + Envido</td>
            <td className={styles.td}>2 puntos</td>
            <td className={styles.td}>4 puntos</td>
          </tr>
          <tr>
            <td className={styles.td}>Envido + Real envido</td>
            <td className={styles.td}>2 puntos</td>
            <td className={styles.td}>5 puntos</td>
          </tr>
          <tr>
            <td className={styles.td}>Envido + Falta</td>
            <td className={styles.td}>2 puntos</td>
            <td className={styles.td}><em>Ver regla más abajo</em></td>
          </tr>
          <tr>
            <td className={styles.td}>Real envido + Falta</td>
            <td className={styles.td}>3 puntos</td>
            <td className={styles.td}><em>Ver regla más abajo</em></td>
          </tr>
          <tr>
            <td className={styles.td}>Envido + Envido + Real envido</td>
            <td className={styles.td}>4 puntos</td>
            <td className={styles.td}>7 puntos</td>
          </tr>
          <tr>
            <td className={styles.td}>Envido + Real envido + Falta</td>
            <td className={styles.td}>5 puntos</td>
            <td className={styles.td}><em>Ver regla más abajo</em></td>
          </tr>
          <tr>
            <td className={styles.td}>Envido + Envido + Real envido + Falta</td>
            <td className={styles.td}>7 puntos</td>
            <td className={styles.td}><em>Ver regla más abajo</em></td>
          </tr>
        </tbody></table>


      <p>La falta es la apuesta máxima del envido y la puntuación conseguida depende del estado de la partida:</p>
      <ul>
        <li>Si se está en “malas”, el jugador o pareja ganadora del envite gana el chico.</li>
        <li>Si se está en “buenas”, el jugador o pareja ganadora se lleva los puntos que le faltan al jugador o pareja con más puntos para conseguir el chico.</li>
      </ul>
      <code>Ejemplo: en una partida a 30 puntos, una pareja tiene 10 puntos y la otra 20; en la falta se apostarían 10 puntos por estar en “buenas” (30-20=10).</code>
      <p>El envido se juega antes que el truco, por tanto, si una pareja llega a los puntos de un chico sumando los puntos del envido, gana el chico y el truco no se tiene en cuenta.</p>
      <code>Ejemplo: en una partida a 30 puntos, una pareja tiene 28 puntos y la otra 26; la primera gana un envido de 2 puntos y la segunda gana un truco de 4 puntos; gana la primera pareja con el envido.</code>

      <h3>Jugar las cartas tapadas</h3>
      <p>Tirar una carta tapada puede resultar útil para engañar a los contrarios y esconder tu jugada.</p>
      <p>¡Atención! Si tiras una carta tapada, esa carta pierde su valor (todas las cartas le ganan y sólo puede empatar con otra carta tapada).</p>
    </div>
  )
}

export default Rules