import React from 'react';
import { Layout } from 'antd';
import { css } from 'emotion';
import { PlayTable } from './components';
import { images } from 'src/assets';
import { Player } from 'src/types';
import { Utils } from 'src/utils';
import { COLOR } from 'src/constants';

const avatars = ['boxitracio', 'comisario', 'hijitus', 'larguirucho', 'neurus', 'pucho'];

const containerCss = css({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#262626',
  height: '100vh',
});

const hands = Utils.generateHands(6);
const players: Player[] = avatars.map((avatar, index) => ({
  name: `Player ${index+1}`,
  image: images[avatar],
  position: index + 1,
  hand: hands[index],
}));

const headerCss = css({
  backgroundColor: `${COLOR.GREEN} !important`,
  color: `${COLOR.WHITE} !important`,
});

const { Header } = Layout;

function Game() {
  return (
    <Layout>
      <Header className={headerCss}>Quiero re truco</Header>
      <div className={containerCss}>
        <PlayTable players={players} />
      </div>
    </Layout>
  )
}

export { Game }
