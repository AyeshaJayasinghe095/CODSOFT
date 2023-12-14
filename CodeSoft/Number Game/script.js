let generatedNumber;
let attempts = 0;
const maxAttempts = 5; // Change the number of attempts allowed here

function startGame() {
  generatedNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById('message').innerText = '';
  document.getElementById('attempts').innerText = '';
}

function checkGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById('message').innerText = 'Please enter a valid number between 1 and 100.';
  } else if (guess === generatedNumber) {
    document.getElementById('message').innerText = `Congratulations! You guessed the correct number ${generatedNumber} in ${attempts} attempts.`;
    document.getElementById('attempts').innerText = '';
  } else if (guess < generatedNumber) {
    document.getElementById('message').innerText = 'Too low! Try a higher number.';
  } else {
    document.getElementById('message').innerText = 'Too high! Try a lower number.';
  }

  if (attempts === maxAttempts && guess !== generatedNumber) {
    document.getElementById('message').innerText = `Sorry, you've reached the maximum attempts. The number was ${generatedNumber}.`;
    document.getElementById('attempts').innerText = '';
  }

  document.getElementById('guessInput').value = '';
}

function playAgain() {
  startGame();
}
