import React from 'react'
import OnçaImagem from '../data/img/onça.jpg'
import { Navigate, useNavigate } from 'react-router-dom'

const Temas = (onChoiceCategory) => {

  const navigate = useNavigate()

  const handleImagem = (category) => {
    onChoiceCategory(category)
    navigate("/")
  }

  return (
    <div>
        <h1>Temas</h1>
        <img onClick={() => handleImagem("Animais")} src={OnçaImagem} alt="Onça"/>
        <button className="btn-jogar-voltar" onClick={() => navigate("/")}>Voltar</button>
    </div>
  )
}

export default Temas