import React, { useState, useEffect } from 'react';
import styles from './Score.module.css'

function Score() {
  const canvasRef = React.useRef(null);

  function drawLine(context: any, fromX: number, fromY: number, toX: number, toY: number) {
    context.beginPath()
    context.moveTo(fromX, fromY)
    context.lineTo(toX, toY)
    context.stroke()

    context.closePath()
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.lineWidth = 7
    context.lineCap = 'round'

    context.strokeStyle = 'rgba(255,255,255, .7)'
    drawLine(context, 50, 180, 350, 180)
    drawLine(context, 200, 100, 200, 500)
    context.fillStyle = 'rgba(255,255,255, .7)'
    context.font = "30px Arial"
    context.textAlign = "center"
    context.fillText("Puntos", canvas.width / 2, 80)
    context.fillText("Nos", 120, 150)
    context.fillText("Ellos", 280, 150)
  }, [])

  return (
    <div className={styles.score}>
      <canvas
        className={styles.chalkboard}
        ref={canvasRef}
        width={400}
        height={600}
      />
    </div>
  )
}

export default Score
