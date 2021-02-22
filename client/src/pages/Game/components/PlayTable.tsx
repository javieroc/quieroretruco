import React from 'react';
import { css } from 'emotion';
import { Match } from 'src/types';
import { Player } from './Player';
import { useContext } from 'src/pages/Game/context';

const containerCss = css({
  marginTop: '50px',
});

const waitingPlayerCss = css({
  display: 'flex',
  padding: '10px 0',
  borderRadius: '5px',
  color: 'white',
  '& h3': {
    padding: '0 10px',
  },
  '& span': {
    fontSize: '14px',
    color: 'grey',
  },
  '& img': {
    width: '70px',
    borderRadius: '50%',
  }
});

const tableCss = css({
  width: '500px',
  height: '500px',
  backgroundColor: '#4aad4a',
  border: '15px solid #a95555',
  borderRadius: '50%',
  position: 'relative',

  '&:before': {
    content: '""',
    border: '7px solid rgba(0, 0, 0, .1)',
    display: 'block',
    width: '515px',
    height: '515px',
    borderRadius: '50%',
    position: 'absolute',
    top: '-15px',
    left: '-15px',
  },
  '&:after': {
    content: '""',
    border: '7px solid rgba(0, 0, 0, .1)',
    display: 'block',
    width: '485px',
    height: '485px',
    borderRadius: '50%',
    position: 'absolute',
    top: 0,
    left: 0,
  }
});

const playersCss = css({
  position: 'relative',
  width: '100%',
  height: '100%',
});

function PlayTable(): JSX.Element {
  const { currentMatch } = useContext()!;

  function renderContent({ players, status }: Match): React.ReactElement {
    const numOfPlayers = players.length;
    const waitingPlayer = players.length % 2 === 0 ? null : players[numOfPlayers - 1];
    const activePlayers = players.length % 2 === 0 ? [...players] : players.slice(0, numOfPlayers - 1);

    return (
      <>
        {waitingPlayer && <div className={waitingPlayerCss}>
          <img src={`/img/${waitingPlayer.image}`} alt="Waiting player" />
          <h3>{waitingPlayer.name}<span>  esperando compañer@...</span></h3>
        </div>}

        <div className={tableCss}>
          <div className={playersCss}>
            {activePlayers.map((player, i) => <Player key={i} player={player} totalPlayers={activePlayers.length} />)}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={containerCss}>
      {currentMatch && renderContent(currentMatch)}
    </div>
  )
}

export { PlayTable };
