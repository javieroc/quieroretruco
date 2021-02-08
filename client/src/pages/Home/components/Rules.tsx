import React from 'react';
import { Table } from 'antd';
import { css } from 'emotion';
import { images } from 'src/assets';

const cards = [
  {
    key: 1,
    description: 'As de espadas (también llamado “macho”)',
    image: '1-espada',
  },
  {
    key: 2,
    description: 'As de bastos (también llamado “hembra”)',
    image: '1-basto',
  },
  {
    key: 3,
    description: 'Siete de espadas',
    image: '7-espada',
  },
  {
    key: 4,
    description: 'Siete de oro',
    image: '7-oro',
  },
  {
    key: 5,
    description: 'Treses',
    image: '3-copa',
  },
  {
    key: 6,
    description: 'Doses',
    image: '2-oro',
  },
  {
    key: 7,
    description: 'As de oros y as de copas (llamados “ases falsos”',
    image: '1-copa',
  },
  {
    key: 8,
    description: 'Doces',
    image: '12-basto',
  },
  {
    key: 9,
    description: 'Onces',
    image: '11-espada',
  },
  {
    key: 10,
    description: 'Dieces',
    image: '10-oro',
  },
  {
    key: 11,
    description: 'Siete de copas y siete de bastos (llamados “sietes falsos” o “malos”)',
    image: '7-basto',
  },
  {
    key: 12,
    description: 'Seises',
    image: '6-oro',
  },
  {
    key: 13,
    description: 'Cincos',
    image: '5-espada',
  },
  {
    key: 14,
    description: 'Cuatros',
    image: '4-copa',
  },
]

const puntosTruco = [
  {
    key: 1,
    apuesta: 'Si no hay apuesta',
    puntos: '1 punto al ganador de la ronda',
  },
  {
    key: 2,
    apuesta: 'Truco',
    puntos: '2 puntos',
  },
  {
    key: 3,
    apuesta: 'Retruco',
    puntos: '3 puntos',
  },
  {
    key: 4,
    apuesta: 'Vale cuatro',
    puntos: '4 puntos',
  },
]

const puntosEnvido = [
  {
    key: 1,
    apuesta: 'Envido',
    noquiero: '1 punto',
    quiero: '2 puntos',
  },
  {
    key: 2,
    apuesta: 'Real envido',
    noquiero: '1 punto',
    quiero: '3 puntos',
  },
  {
    key: 3,
    apuesta: 'Falta envido',
    noquiero: '1 punto',
    quiero: 'Ver regla más abajo',
  },
  {
    key: 4,
    apuesta: 'Envido + Envido',
    noquiero: '2 puntos',
    quiero: '4 puntos',
  },
  {
    key: 5,
    apuesta: 'Envido + Real envido',
    noquiero: '2 puntos',
    quiero: '5 puntos',
  },
  {
    key: 6,
    apuesta: 'Envido + Falta',
    noquiero: '2 puntos',
    quiero: 'Ver regla más abajo',
  },
  {
    key: 7,
    apuesta: 'Real envido + Falta',
    noquiero: '3 puntos',
    quiero: 'Ver regla más abajo',
  },
  {
    key: 8,
    apuesta: 'Envido + Envido + Real envido',
    noquiero: '4 puntos',
    quiero: '7 puntos',
  },
  {
    key: 9,
    apuesta: 'Envido + Real envido + Falta',
    noquiero: '5 puntos',
    quiero: 'Ver regla más abajo',
  },
  {
    key: 10,
    apuesta: 'Envido + Envido + Real envido + Falta',
    noquiero: '7 puntos',
    quiero: 'Ver regla más abajo',
  },
]

const rulesCss = css({
  padding: '10px',
})

const keywordCss = css({})

function Rules(): JSX.Element {
  return (
    <div className={rulesCss}>
      <h2>Reglas Truco argentino</h2>
      <h3>Introducción</h3>
      <p>El truco es un juego de cartas de origen árabe muy popular en Argentina, Brasil, Uruguay, en el levante español y en buena parte de sudamérica.</p>

      <h3>Objetivo del juego</h3>
      <p>El truco argentino se juega a 2 jugadores o por parejas y se utiliza la baraja española de 40 cartas.</p>
      <p>El objetivo del juego es ganar un número determinado de chicos (1, 2 ó 3 chicos). Cada chico se puede jugar a 15 ó 30 puntos. La primera mitad de los puntos se les llama popularmente “malas”, y a la segunda “buenas”.</p>
      <p>Los puntos se consiguen mediante los trucos y los envites, que son apuestas que se van realizando en el transcurso de las diferentes manos de cada ronda.</p>

      <h3>Valor de las cartas (de mayor a menor)</h3>

      <Table
        columns={[
          {
            title: 'Descripción',
            dataIndex: 'description',
          },
          {
            title: 'Carta',
            render: ({ image }) => <img src={images[image]} alt={`Carta ${image}`} width="30" />,
            align: 'center',
          }
        ]}
        dataSource={cards}
        pagination={false}
        size="small"
        bordered={true}
      />

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
        <li><span className={keywordCss}>No quiero</span>. Rechaza el truco y la pareja contraria gana la ronda.</li>
        <li><span className={keywordCss}>Quiero</span>. Acepta la apuesta la cual se resolverá al final de la ronda.</li>
        <li><span className={keywordCss}>Retruco</span>, <span className={keywordCss}>Vale cuatro</span>. Sube la apuesta y pasa el turno a la pareja contraria para que decida.</li>
      </ul>

      <Table
        columns={[
          {
            title: 'Apuesta',
            dataIndex: 'apuesta',
          },
          {
            title: 'Puntos',
            dataIndex: 'puntos',
          },
        ]}
        dataSource={puntosTruco}
        pagination={false}
        size="small"
        bordered={true}
      />

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
        <li><span className={keywordCss}>No quiero</span>. Rechaza la apuesta y la pareja que ha envidado suma los puntos apostados hasta ese momento.</li>
        <li><span className={keywordCss}>Quiero</span>. Acepta la apuesta que se resolverá al final de la ronda.</li>
        <li><span className={keywordCss}>Envido</span>, <span className={keywordCss}>Real envido</span>, <span className={keywordCss}>Falta</span>. Sube la apuesta y pasa el turno al jugador o pareja contraria para que decida. Ver tabla a continuación.</li>
      </ul>

      <Table
        columns={[
          {
            title: 'Apuesta',
            dataIndex: 'apuesta',
          },
          {
            title: 'No Quiero',
            dataIndex: 'noquiero',
          },
          {
            title: 'Quiero',
            dataIndex: 'quiero',
          },
        ]}
        dataSource={puntosEnvido}
        pagination={false}
        size="small"
        bordered={true}
      />

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
  );
}

export { Rules }
