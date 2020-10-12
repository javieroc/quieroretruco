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

  function drawImage(context: any, src:string, x:number, y: number, w: number, h: number) {
    const image = new Image()
    image.src = src
    image.onload = () => {
      context.drawImage(image, x, y, w, h)
    }
  }

  function drawRotatedImage(context: any, src:string, x:number, y: number, w: number, h: number, degrees: any) {
    const image = new Image()
    const canvas = canvasRef.current
    image.src = src
    image.onload = () => {
      context.save();
      context.translate(canvas.width / 2, canvas.height / 2);
      context.rotate(degrees * Math.PI / 180);
      context.drawImage(image, x, y, w, h);
      context.restore();
    }
  }

  function getMatchImage(pos: number, i: number, isNos: boolean) {
    let options = [
      {
        image: '/img/match-up.png',
        x: isNos ? 90 : 250,
        y: 200 + i * 70,
        w: 5,
        h: 50
      },
      {
        image: '/img/match-right.png',
        x: isNos ? 90 : 250,
        y: 200 + i * 70,
        w: 50,
        h: 5
      },
      {
        image: '/img/match-down.png',
        x: isNos ? 140 : 300,
        y: 200 + i * 70,
        w: 5,
        h: 50
      },
      {
        image: '/img/match-left.png',
        x: isNos ? 90 : 250,
        y: 250 + i * 70,
        w: 50,
        h: 5
      },
      {
        image: '/img/match-up.png',
        x: isNos ? -110 + i * 50 : 0 + i * 50,
        y: isNos ? -20 + i * 50 : -130 + i * 50,
        w: 5,
        h: 50,
      }
    ]

    return options[pos]
  }

  function drawScore(context: any) {
    for (let i: number = 0; i < score.nos; i += 1) {
      const { image, x, y, w, h} = getMatchImage(i % 5, Math.floor(i / 5), true)
      if (i % 5 === 4) {
        drawRotatedImage(context, image, x, y, w, h, 45)
      } else {
        drawImage(context, image, x, y, w, h)
      }
    }

    for (let i: number = 0; i < score.ellos; i += 1) {
      const { image, x, y, w, h} = getMatchImage(i % 5, Math.floor(i / 5), false)
      if (i % 5 === 4) {
        drawRotatedImage(context, image, x, y, w, h, 45)
      } else {
        drawImage(context, image, x, y, w, h)
      }
    }
  }

  function drawTable(context: any, middlePosition: number) {
    context.lineWidth = 7
    context.lineCap = 'round'
    context.strokeStyle = 'rgba(255,255,255, .9)'
    drawLine(context, 50, 180, 350, 180)
    drawLine(context, 200, 100, 200, 500)
    context.fillStyle = 'rgba(255,255,255, .9)'
    context.font = "30px Arial"
    context.textAlign = "center"
    context.fillText("Puntos", middlePosition, 80)
    context.fillText("Nos", 120, 150)
    context.fillText("Ellos", 280, 150)
  }

  function onClickNos() {
    setScore({ nos: score.nos + 1, ellos: score.ellos })
  }

  function onClickEllos() {
    setScore({ nos: score.nos, ellos: score.ellos + 1 })
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    drawTable(context, canvas.width / 2)
    drawScore(context)
  }, [score])

  return (
    <div className={styles.score}>
      <canvas
        className={styles.chalkboard}
        ref={canvasRef}
        width={400}
        height={600}
      />
      <div>
        <button onClick={onClickNos}>Nos</button>
        <button onClick={onClickEllos}>Ellos</button>
      </div>
    </div>
  )
}

export default Score
