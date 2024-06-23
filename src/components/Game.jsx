import React from 'react'
import "./Game.css"
import { useState, useRef } from 'react'
import HeartImage from '/src/data/img/Heart.jpg';


const Game = ({ verifyLetter,
  pickageCategory,
  pickageImagem,
  pickageWord,
  guessLetters,
  setGuessLetters,
  wrongLetters,
  guess,
  score,
  letters }) => {

  const [letter, setLetter] = useState('')
  const letterUseRef = useRef(null)


  const handleLetter = (e) => {
    e.preventDefault()
    //Envia a variável letter para o componente APP
    verifyLetter(letter)
    //Seta para null novamente
    setLetter('')
    //Foca o cursor no input
    letterUseRef.current.focus()
  }
  return (
    <div className="game">
      <div className='game-container'>

      <div className="points">
        <span>Pontuação {score}</span>
        <div className="hearts-container">
         {Array.from({ length: guess }, (_, index) => (
          <img key={index} src={HeartImage} alt="Heart" />
         ))}
       </div>
      </div>  

       <div className="tip">
        <p>Dica sobre a palavra:</p>
        <img src={pickageImagem}/>
      </div>

      <div className="wordContainer">
        {letters.map((letter, indice) => (
          guessLetters.includes(letter) ? (
            <span className="letter" key={indice}>{letter}</span>
          ) : (
            <span className="blankSquare" key={indice}></span>)
        ))}
      </div>

      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleLetter}>
          <input type="text" name="letter" maxLength="1" required onChange={(e) => setLetter(e.target.value)} value={letter} ref={letterUseRef}></input>
          <button className="btn-jogar">jogar!</button>
        </form>
      </div>

      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
            {wrongLetters.map((letter, index) => (
              <span key={index}>{letter}, </span>
            ))}
      </div>

    </div>
    </div>
  )
}

export default Game