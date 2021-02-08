import React from 'react';
import { css } from 'emotion';
import { images } from 'src/assets';

const heroCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: '2px solid white'
})

const heroTextCss = css({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

const cardsCss = css({
  position: 'relative',
  width: '400px',
  height: '400px',
  margin: '50px',
  boxSizing: 'border-box',
})

const card1Css = css({
  position: 'absolute',
  left: '40px',
  transform: 'rotate(-40deg)',
})

const card2Css = css({
  position: 'absolute',
  left: '100px',
  transform: 'rotate(-20deg)',
})

const card3Css = css({
  position: 'absolute',
  left: '160px',
  top: '20px',
})

const card4Css = css({
  position: 'absolute',
  left: '200px',
  top: '50px',
  transform: 'rotate(20deg)',
})

function Hero(): JSX.Element {
  return (
    <div className={heroCss}>
      <div className={heroTextCss}>
        <h1>Gran Truco Argentino</h1>
        <div>
        </div>
      </div>

      <div className={cardsCss}>
        <img className={card1Css} src={images['1-espada']} alt="1 de espada" />
        <img className={card2Css} src={images['1-oro']} alt="1 de oro" />
        <img className={card3Css} src={images['1-basto']} alt="1 de basto" />
        <img className={card4Css} src={images['1-copa']} alt="1 de copa" />
      </div>
    </div>
  )
}

export { Hero }
