import React from 'react'
import './StartGame.css'
import {useNavigate} from 'react-router-dom'

const StartGame = ({startGame}) => {

  const navigate = useNavigate()
  return (
    <div className = 'Start'>
        <h1>Secret World</h1>
        <p>Clique no botão abaixo para jogar</p>
        <button onClick={() => startGame()}>Começar o jogo</button>
        <button onClick={() => navigate("/comojogar")}>Como jogar</button>
        <button onClick={() => navigate("/temas")}>Temas</button>
    </div>
  )
}

export default StartGame