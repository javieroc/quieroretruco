import React, { useState } from 'react'
import styles from './Card.module.css'

interface Props {
  image: string
}

function Card({ image }: Props) {
  const [isFlipped, flip] = useState<boolean>(false)

  return (
    <img
      className={styles.cardImage}
      src={isFlipped ? `/img/cards/${image}.png` : '/img/cards/back.png'}
      onClick={() => flip(true)}
    />
  )
}

export default Card
