const hangmanImage = document.querySelector(".hangman-box img")
const wordDisplay = document.querySelector(".word-display")
const guessesText = document.querySelector('.guesses-text b')
const keyboardDiv = document.querySelector(".keyboard")
const gameModal = document.querySelector(".game-modal")
const playAgainBtn = document.querySelector(".play-again")

let currentWord, correctLetters, wrongGuessCount, currentWord2
const maxGuesses = 6

const resetGame = () => {
  // resseting all game variables and UI elements
  correctLetters = []
  wrongGuessCount = 0
  hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`
  keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false)
  wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("")
  gameModal.classList.remove('show')
}

const normalizeWord = (word) => {
  return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
};

const getRandomWord = () => {
  // selecting a random word and hint from the wordList
  const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)]
  currentWord2 = word
  currentWord = normalizeWord(word);
  //console.log(word);
  document.querySelector(".hint-text b").innerText = hint
  resetGame()
}

const gameOver = (isVictory) => {
  // After 600ms of game complete... showing modal with relevant details
  setTimeout(() => {
    const modalText = isVictory ? `Encontraste la palabra:` : `La respuesta correcta era:`
    gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`
    gameModal.querySelectorAll("h4").innerText = `${isVictory ? 'Felicidades' : 'Game Over'}`
    gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord2}</b>`
    gameModal.classList.add('show')
  }, 300)
}

const initGame = (button, clickedLetter) => {
  // checking if clickedLetter exists in the currentWord
  if (currentWord.includes(clickedLetter)) {
    // showing all correct letters in the word display
    [...currentWord].forEach((letter, index) => {
      if (letter === clickedLetter) {
        correctLetters.push(letter)
        wordDisplay.querySelectorAll('li')[index].innerText = letter
        wordDisplay.querySelectorAll('li')[index].classList.add("guessed")
      }
    })
  } else {
    // If clicked letter doesnt exist then upadate the wrongGuessCount and hangman image
    wrongGuessCount++
    hangmanImage.src = `images/hangman-${wrongGuessCount}.svg`
  }
  button.disabled = true
  guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`

  // Calling gameOver function if any of these condition meets
  if (wrongGuessCount === maxGuesses) return gameOver(false)
  if (correctLetters.length === currentWord.length) return gameOver(true)
}

//Creating keyboard buttons and adding event listeners
const abcKeys = "qwertyuiopasdfghjklzxcvbnm"
/* for (let i = 97; i <= 122; i++) { */
for (let i = 0; i < abcKeys.length; i++) {
  const button = document.createElement("button")
  /* button.innerText = String.fromCharCode(i) */
  button.innerText = abcKeys[i]
  keyboardDiv.appendChild(button)
  keyboardDiv.appendChild(button)
  button.addEventListener("click", e => initGame(e.target, abcKeys[i]))
}
console.log("Desarrollado por gduarte2999@gmail.com");

getRandomWord();
playAgainBtn.addEventListener("click", getRandomWord)