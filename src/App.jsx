import { useState, useEffect } from "react";
import wordList from "./services/word-list.js";
import ButtonLetter from "./components/ButtonLetter.jsx";
import "./App.css";
const alphabet = "qwertyuiopasdfghjklzxcvbnm".split(""); // Array de letras
import hangman0 from "./assets/img/hangman-0.svg";
import hangman1 from "./assets/img/hangman-1.svg";
import hangman2 from "./assets/img/hangman-2.svg";
import hangman3 from "./assets/img/hangman-3.svg";
import hangman4 from "./assets/img/hangman-4.svg";
import hangman5 from "./assets/img/hangman-5.svg";
import hangman6 from "./assets/img/hangman-6.svg";
import lostImg from "./assets/img/lost.gif";
import wonImg from "./assets/img/victory.gif";

const hangmanImages = [
  hangman0,
  hangman1,
  hangman2,
  hangman3,
  hangman4,
  hangman5,
  hangman6,
];

function App() {
  //obtiene la palabra aleatoria del array
  const getRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * wordList.length);
    return wordList[randomIndex];
  };

  const [currentWord, setCurrentWord] = useState(getRandomWord); //palabra actual
  const [usedLetters, setUsedLetters] = useState([]); // Letras ya usadas
  const [incorrectCount, setIncorrectCount] = useState(0); //estado de las conjeturas incorrectas
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  // Maneja clic en una letra
  const handleLetterClick = (letter) => {
    //actualiza las letras ya usadas
    if (!usedLetters.includes(letter)) {
      setUsedLetters([...usedLetters, letter]);
    }
    //si no esta en la palabra aumenta las conjeturas incorrectas
    if (!currentWord.word.includes(letter)) {
      setIncorrectCount((prevCount) => prevCount + 1);
    }
  };

  // Reinicia juego
  const handleNewWord = () => {
    setCurrentWord(getRandomWord());
    setUsedLetters([]); // Resetea letras usadas
    setIncorrectCount(0); //reinicia el conteo de las conjeturas incorrectas
    setGameOver(false);
    setHasWon(false);
  };

  //funcion para ver si gana o no el juego
  useEffect(() => {
    if (incorrectCount > 5) {
      // Mostrar "Perdiste" después de 1-2 segundos
      setTimeout(() => {
        setGameOver(true);
        setHasWon(false);
      }, 500); 
    }

    // Verificar si todas las letras de la palabra han sido adivinadas
    const normalizedWord = currentWord.word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // Eliminar tildes
      .replace(/ñ/g, "n"); // Reemplazar ñ

    const allLettersGuessed = normalizedWord
      .split("")
      .every((char) => usedLetters.includes(char));

    if (allLettersGuessed) {
      setTimeout(() => {
        setGameOver(true);
        setHasWon(true);
      }, 500); // Muestra "Ganaste" después de medio segundo
    }
  }, [incorrectCount, usedLetters, currentWord]); // Se ejecuta cuando cambia incorrectCount, usedLetters o currentWord

  return (
    <>
      {gameOver ? (
        hasWon ? (
          <div className="game-result">
            <h1>GANASTE</h1>
            <img src={wonImg} alt="" />
            <button className="game-button" onClick={handleNewWord}>
              Jugar de nuevo
            </button>
          </div>
        ) : (
          <div className="game-result">
            <h1>PERDISTE</h1>
            <img src={lostImg} alt="" />
            <button className="game-button" onClick={handleNewWord}>
              Intentar de nuevo
            </button>
          </div>
        )
      ) : (
        <div>
          <h1 className="game-title">Hangman Game</h1>
          <div className="d-flex game-wrapper">
            <div className="game-column">
              <img
                src={
                  hangmanImages[
                    Math.min(incorrectCount, hangmanImages.length - 1)
                  ]
                }
                alt={`Imagen del Ahorcado ${incorrectCount}`}
              />
            </div>
            <div className="game-column">
              <p className="game-hint">{currentWord.hint}</p>
              <p className="game-hint main-color">
               {/*  Palabra:{" "} */}
                {currentWord.word
                  .split("")
                  .map((char, index) =>
                    usedLetters.includes(
                      char
                        .normalize("NFD")
                        .replace(/[\u0300-\u036f]/g, "") // Elimina tildes
                        .replace(/ñ/g, "n") // Convierte "ñ" en "n"
                    )
                      ? char // Muestra la letra original con acento si fue adivinada
                      : "_"
                  )
                  .join(" ")}
              </p>

              {/* Renderizar botones de letras */}
              <div className="d-flex justify-center">
                <div className="game-keyboard">
                  {alphabet.map((letter) => (
                    <ButtonLetter
                      key={letter}
                      letter={letter}
                      onClick={handleLetterClick}
                      disabled={usedLetters.includes(letter)}
                    />
                  ))}
                </div>
              </div>
              <div>
                <p className="game-hint">
                  Conjeturas incorrectas: {incorrectCount}/6
                </p>
              </div>
              <button className="game-button" onClick={handleNewWord}>
                Nueva palabra
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
