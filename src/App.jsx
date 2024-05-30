import './App.css'
import {useEffect, useState, useCallback} from 'react'
import {useNavigate} from 'react-router-dom'

//Importação das categorias
import wordCategories from './data/Words.js'

//Importação de componentes
import StartGame from './components/StartGame'
import Game from './components/Game'
import End from './components/End'


//Estágios do jogo
const stage = [{id:1, name: 'start'},
               {id:2, name: 'game'},
               {id:3, name: 'end'}]

const guessesQty = 4 // Tentativas

function App() {

  const navigate = useNavigate()

  {/*Estágios do jogo*/}
  const [gameStage, setGameStage] = useState(stage[0].name) //Inicia o jogo setando com start

  {/*Categoria e palavra escolhida*/}
  const [pickageCategory, setPickageCategory] = useState('') //Categoria escolhida
  const [pickageWord, setPickageWord] = useState('') //Palavra gerada
  const [letters, setLetters] = useState([]) //Letras da palavra gerada convertida com Split

  {/*Array de letras*/}
  const[guessLetters, setGuessLetters] = useState([]) //Letras Corretas
  const[wrongLetters, setWrongLetters] = useState([]) //Letras Erradas
  const[guess, setGuess] = useState(guessesQty) //Tentativas
  const[score, setScore] = useState(0) //Pontuação

  {/*Função que escolhe a palavra e a categoria do arquivo "data"*/}
  const pickWordCategory = () => {
    const categories = Object.keys(wordCategories)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] 
    const wordsArray = wordCategories[category];
    const word = wordsArray[Math.floor(Math.random() * wordsArray.length)];
    
    return({category, word})
  }
 
  // O useCallback só renderiza na primeira chamada ou quando muda o estado do array de dependências
  const startGame = () =>{
    
    //Função que limpa as palavras e inicia novamente as tentativas.
    clearLeterState()
    
    //retorna a nova letra e nova categoria
    const {word, category} = pickWordCategory()

    //Dividir a palavra (word) em letras individuais e armazená-las em uma array.
    let wordLetters = word.split('')
    //Converter cada letra da array wordLetters para maiúscula.
    wordLetters = wordLetters.map((l) => l.toUpperCase())

    {/*Seta os estados*/}
    setPickageCategory(category)
    setPickageWord(word)
    setLetters(wordLetters)
    
    setGameStage(stage[1].name)
    console.log(gameStage)
  }

  const verifyLetter = (letter) => {
    const normalizeLetter = letter.toUpperCase()

    if(guessLetters.includes(normalizeLetter) || wrongLetters.includes(normalizeLetter)) {
      return;
    }

    if(letters.includes(normalizeLetter)){
      setGuessLetters((actualGuessLetters) => [...actualGuessLetters, normalizeLetter])
    } else {
      setWrongLetters((actualWrongLetters) => [...actualWrongLetters, normalizeLetter]);
    
      setGuess((actualGuess) => (actualGuess - 1))
    }
  }

  //Função que limpa as palavras e seta as tentativas.
  function clearLeterState(){
    setGuessLetters([])
    setWrongLetters([])
    setGuess(guessesQty)
  }

  useEffect(()=> {
    if(guess <=0) {
      clearLeterState();
      setGameStage(stage[2].name)
    }
    
  },[guess])

  // useEffect para verificar se o jogador adivinhou todas as letras corretamente e reiniciar o jogo se isso acontecer
  useEffect(() => {
    // Cria um array de letras únicas a partir da palavra atual, removendo duplicatas
    const uniqueLetters = [... new Set (letters)]

    // Verifica se o número de letras adivinhadas corretamente é igual ao número de letras únicas na palavra indicando que completou a palavra e iniciando um novo jogo
    if(guessLetters.length != 0 && guessLetters.length === uniqueLetters.length) {
      // Atualiza a pontuação do jogador, adicionando 100 pontos à pontuação atual
      setScore((atualScore) => (atualScore += 100))
      // Inicia um novo jogo, escolhendo uma nova palavra e categoria
     startGame()
    }

  },[guessLetters, letters, startGame])

  const retry = () => {
    setGuess(guessesQty)
    setScore(0)
    setGameStage(stage[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartGame startGame={startGame}/>}
      {gameStage === "game" && <Game verifyLetter={verifyLetter} pickageCategory={pickageCategory} pickageWord={pickageWord} guessLetters={guessLetters} wrongLetters={wrongLetters} guess={guess} score={score} letters={letters} setGuessLetters={setGuessLetters}/>}
      {gameStage === "end" && <End retry={retry} score={score} pickageWord={pickageWord}/>}
    </div>
  )
}

export default App
