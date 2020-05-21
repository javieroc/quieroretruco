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
      src={isFlipped ? `/cards/${image}.png` : '/cards/back.png'}
      onClick={() => flip(true)}
    />
  )
}

export default Card
