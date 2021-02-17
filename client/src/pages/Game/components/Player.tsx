import React from 'react';
import { css, cx } from 'emotion';
import { Player as PlayerType } from 'src/types';
import { PlayCard } from './PlayCard';
import { COLOR } from 'src/constants';

interface Props {
  player: PlayerType;
  totalPlayers: number;
}

const containerCss = css({
  position: 'absolute',
  zIndex: 2,

  '&--player1-2': {
    bottom: '0px',
    left: '50%',
    transform: 'translatex(-50%) translatey(50%)',
  },
  '&--player1-4': {
    bottom: '0px',
    left: '50%',
    transform: 'translatex(-50%) translatey(50%)',
  },
  '&--player1-6': {
    bottom: '0px',
    left: '50%',
    transform: 'translatex(-50%) translatey(50%)',
  },
  '&--player2-2': {
    top: '0px',
    left: '50%',
    transform: 'translatex(-50%) translatey(-50%)',
  },
  '&--player2-4': {
    top: '50%',
    left: '0px',
    transform: 'translatex(-50%) translatey(-50%)',
  },
  '&--player3-4': {
    top: '0px',
    left: '50%',
    transform: 'translatex(-50%) translatey(-50%)',
  },
  '&--player4-4': {
    top: '50%',
    right: '0px',
    transform: 'translatex(50%) translatey(-50%)',
  },
  '&--player2-6': {
    top: '75%',
    left: '0px',
    transform: 'translatex(-50%) translatey(-50%)',
  },
  '&--player3-6': {
    top: '25%',
    left: '0px',
    transform: 'translatex(-50%) translatey(-50%)',
  },
  '&--player4-6': {
    top: '0px',
    left: '50%',
    transform: 'translatex(-50%) translatey(-50%)',
  },
  '&--player5-6': {
    top: '25%',
    right: '0px',
    transform: 'translatex(50%) translatey(-50%)',
  },
  '&--player6-6': {
    top: '75%',
    right: '0px',
    transform: 'translatex(50%) translatey(-50%)',
  },
});

const playerCss = css({
  display: 'flex',
  justifyContent: 'flex-start',
  background: 'rgb(13, 13, 13, .8)',
  borderRadius: '3px',
  border: `2px solid ${COLOR.WHITE}`,
  width: '240px',

  '& img': {
    width: '70px',
  },
  '& div': {
    fontSize: '16px',
    fontWeight: 'bold',
    color: COLOR.WHITE,
    paddingLeft: '10px',
  }
});

const cardsCss = css({
  display: 'flex',
  justifyContent: 'center',
  position: 'absolute',
  left: '65%',
  bottom: '0px',
  transform: 'translatex(-50%) translatey(50%)',
  width: '180px',
});

function Player({ player, totalPlayers }: Props) {
  return (
    <div className={cx(containerCss, containerCss + `--player${player.position}-${totalPlayers}`)}>
      <div className={playerCss}>
        <img src={player.image} alt="Player avatar" />
        <div>{player.name}</div>
      </div>
      <div className={cardsCss}>
        {player.hand.map((card, i) => <PlayCard key={i} image={card} />)}
      </div>
    </div>
  )
}

export { Player };
