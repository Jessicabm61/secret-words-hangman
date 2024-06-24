import React from 'react'
import "./Win.css"
import {useNavigate} from 'react-router-dom'
import TrofeuImage from '/src/data/img/Trofeu.png';
const Win = ({score,retry}) => {
  const navigate = useNavigate()
  return (
    <div className='Win-Container'>
        <p>Você venceu</p>
        <p>Parabéns, a sua pontuação foi: <span>{score}</span></p>
        <button onClick={retry}>Resetar jogo</button>
        <div className='img-Container'>
        <img src={TrofeuImage} alt="TrufeuImage"></img>
        </div>
    </div>
  )
}

export default Win