import React, { useState } from 'react';
import { css } from 'emotion';
import { images } from 'src/assets';

interface Props {
  image: string
}

const cardImageCss = css({
  width: '50px',
  margin: '0 2px',
});

function PlayCard({ image }: Props) {
  const [isFlipped, flip] = useState<boolean>(false);

  return (
    <img
      className={cardImageCss}
      src={isFlipped ? images[image] : images['back']}
      onClick={() => flip(true)}
      alt="Carta de Truco"
    />
  );
}

export { PlayCard };
