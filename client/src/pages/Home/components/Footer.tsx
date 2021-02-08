import React from 'react';
import { css } from 'emotion';
import { images } from 'src/assets';
import { COLOR } from 'src/constants';

const footerCss = css({
  fontFamily: `'Roboto', sans-serif`,
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundImage: `url(${images['wood']})`,
  color: COLOR.WHITE,
  padding: '10px 20px',
});

function Footer(): JSX.Element {
  return (
    <footer className={footerCss}>
      <div>Development by Dev&Coffee</div>
    </footer>
  )
}

export { Footer }
