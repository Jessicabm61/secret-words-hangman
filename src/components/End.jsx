import React from 'react'
import "./End.css"
import Rip from '/src/data/img/Rip.png';

const End = ({retry, score, pickageWord}) => {
  return (
    <div className='End-Container'>
        <p>Fim de jogo</p>
        <p>A palavra era <span>{pickageWord}</span></p>
        <p>A sua pontuação foi: <span>{score}</span></p>
        <button onClick={retry}>Resetar jogo</button>
        <div className='img-Container'>
        <img src={Rip} alt="Rip"></img>
        </div>
    </div>
  )
}

export default End