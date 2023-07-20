const words = ['apple', 'banana', 'cherry', 'date', 'elderberry']
let selectedWord = ''
let attemptsRemaining = 6
let guessedLetters = []
let message = ''

function selectRandomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function initializeGame() {
  selectedWord = selectRandomWord()
  attemptsRemaining = 6
  guessedLetters = []
  message = ''
  displayWord()
}

function displayWord() {
  const wordDisplayElement = document.getElementById('wordDisplay')
  if (wordDisplayElement) {
    let displayText = ''
    for (const letter of selectedWord) {
      if (guessedLetters.includes(letter)) {
        displayText += letter
      } else {
        displayText += '_'
      }
    }
    wordDisplayElement.innerText = displayText
  }
}

function guessLetter() {
  const guessInput = document.getElementById('guessInput')
  if (guessInput && guessInput.value) {
    const guessedLetter = guessInput.value.toLowerCase()
    if (!guessedLetters.includes(guessedLetter)) {
      guessedLetters.push(guessedLetter)
      displayWord()
      if (!selectedWord.includes(guessedLetter)) {
        attemptsRemaining--
        updateAttempts()
      }
      checkGameStatus()
      guessInput.value = '' // Clear the input field after processing the guess
    }
  }
}

function updateAttempts() {
  const attemptsElement = document.getElementById('attempts')
  if (attemptsElement) {
    attemptsElement.innerText = attemptsRemaining
  }
}

function isWordGuessed() {
  for (const letter of selectedWord) {
    if (!guessedLetters.includes(letter)) {
      return false
    }
  }
  return true
}

function checkGameStatus() {
  const messageElement = document.getElementById('message')
  if (messageElement) {
    if (attemptsRemaining === 0) {
      message = 'Game Over. You Lost! The word was ' + selectedWord
      messageElement.innerText = message
      disableInput()
    } else if (isWordGuessed()) {
      message = 'Congratulations! You Won!'
      messageElement.innerText = message
      disableInput()
    }
  }
}

function disableInput() {
  const guessInput = document.getElementById('guessInput')
  const guessButton = document.getElementById('guessButton')
  if (guessInput && guessButton) {
    guessInput.disabled = true
    guessButton.disabled = true
  }
}

document.getElementById('guessButton').addEventListener('click', guessLetter)

initializeGame()
