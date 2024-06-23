import React from 'react'
import "./ComoJogar.css"
import {useNavigate} from 'react-router-dom'
const ComoJogar = () => {
  const navigate = useNavigate()
  return (
    <div className='como-jogar'>
        <h1>Como jogar</h1>
        <p>O jogo da forca é um clássico que desafia os jogadores a adivinhar uma palavra oculta,
            letra por letra, antes que uma figura de forca seja completamente desenhada. No nosso jogo da forca, adicionamos
            uma camada extra de diversão e desafio: utilizaremos uma lista de palavras pré-cadastradas em inglês acompanhadas de imagens.
            Essas imagens servirão como pistas visuais para ajudar na adivinhação das palavras.
        </p>
        <button className="btn-jogar-voltar" onClick={() => navigate("/")}>Voltar</button>
    </div>
  )
}

export default ComoJogar