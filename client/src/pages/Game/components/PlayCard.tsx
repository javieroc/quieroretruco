import React, { useState } from 'react';
import { css } from 'emotion';
import { images } from 'src/assets';

interface Props {
  image: string
  play: (card: string) => void;
}

const cardImageCss = css({
  width: '50px',
  margin: '0 2px',
  cursor: 'pointer',
});

function PlayCard({ image, play }: Props) {
  const [isFlipped, flip] = useState<boolean>(false);

  function handleOnClick() {
    if (!isFlipped) {
      flip(true);
      play(image);
    }
  }

  return (
    <img
      className={cardImageCss}
      src={isFlipped ? images[image] : images['back']}
      onClick={handleOnClick}
      alt="Carta de Truco"
    />
  );
}

export { PlayCard };
