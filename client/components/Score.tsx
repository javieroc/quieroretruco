import React, { useState, useEffect } from 'react';
import styles from './Score.module.css'

function Score() {
  const [score, setScore] = useState({ nos: 0, ellos: 0 })
  const canvasRef = React.useRef(null);

  function drawLine(context: any, fromX: number, fromY: number, toX: number, toY: number) {
    context.beginPath()
    context.moveTo(fromX, fromY)
    context.lineTo(toX, toY)
    context.stroke()

    context.closePath()
  }

  function drawImage(context: any) {
    const image = new Image()
    image.src = '/img/match.png'
    image.onload = () => {
      context.drawImage(image, 90, 200, 5, 50)
    }
  }

  function drawRotatedImage(context: any, degrees: any) {
    const image = new Image()
    const canvas = canvasRef.current
    image.src = '/img/match.png'
    image.onload = () => {
      context.save();
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(degrees * Math.PI / 180);
      context.drawImage(image, -115, -15, 5, 50);
      //context.drawImage(image, 90, 200, 5, 50)
      context.restore();
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')

    context.lineWidth = 7
    context.lineCap = 'round'

    context.strokeStyle = 'rgba(255,255,255, .9)'
    drawLine(context, 50, 180, 350, 180)
    drawLine(context, 200, 100, 200, 500)
    context.fillStyle = 'rgba(255,255,255, .9)'
    context.font = "30px Arial"
    context.textAlign = "center"
    context.fillText("Puntos", canvas.width / 2, 80)
    context.fillText("Nos", 120, 150)
    context.fillText("Ellos", 280, 150)
    drawImage(context)
    drawRotatedImage(context, 45)
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
