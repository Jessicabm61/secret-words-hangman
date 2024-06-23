import React from 'react'
import './StartGame.css'
import {useNavigate} from 'react-router-dom'

const StartGame = ({startGame}) => {

  const navigate = useNavigate()
  return (
    <div className='startgame-container'>
        <h1>Secret Word</h1>
        <p>Clique no botão abaixo para jogar</p>
        <div className='btn-container'>
        <button className="btn-jogar-iniciar" onClick={() => startGame()}>Começar</button>
        <button className="btn-jogar-iniciar" onClick={() => navigate("/comojogar")}>Como jogar</button>
        <button className="btn-jogar-iniciar" onClick={() => navigate("/temas")}>Temas</button>
        </div>
        
    </div>
  )
}

export default StartGame