import React, { useState } from 'react';
import { Layout } from 'antd';
import { css } from 'emotion';
import { PlayTable } from './components';
import { images } from 'src/assets';
import { Game as GameType, Match, Player } from 'src/types';
import { Utils } from 'src/utils';
import { COLOR } from 'src/constants';
import { GameContext } from './context';

const containerCss = css({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#262626',
  height: '100vh',
});

const headerCss = css({
  backgroundColor: `${COLOR.GREEN} !important`,
  color: `${COLOR.WHITE} !important`,
});

const { Header } = Layout;

const avatars = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];

const hands = Utils.generateHands(6);
const players: Player[] = avatars.map((avatar, index) => ({
  name: `Player ${index+1}`,
  image: images[avatar],
  position: index + 1,
  hand: hands[index],
  isBoton: index === 0,
}));

const game: GameType = {
  round1: {
    handsHistory: [],
    won: undefined,
  },
  round2: {
    handsHistory: [],
    won: undefined,
  },
  round3: {
    handsHistory: [],
    won: undefined,
  },
  score: {
    us: 0,
    they: 0,
  }
}

const initialMatch: Match = {
  id: '1',
  status: 'waiting',
  currentGame: game,
  boton: players[0],
  gameHistory: [],
  players,
}

function Game(): JSX.Element {
  const [match, setMatch] = useState(initialMatch);

  return (
    <GameContext.Provider value={{
      currentMatch: match,
      setCurrentMatch: setMatch,
    }}>
      <Layout>
        <Header className={headerCss}>Quiero re truco</Header>
        <div className={containerCss}>
          <PlayTable />
        </div>
      </Layout>
    </GameContext.Provider>
  )
}

export { Game }
