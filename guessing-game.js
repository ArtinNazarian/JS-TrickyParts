function guessingGame() {
  let randomNum = Math.floor(Math.random() * 100);
  let gameOver = false;
  let counter = 0;
  return function getGame(guess) {
    if (gameOver) {
      return `The game is over, you already won!`;
    }
    counter++;

    if (guess === randomNum) {
      gameOver = true;
      return `You win! You found ${randomNum} in ${counter} guesses.`;
    } else if (guess > randomNum) {
      return `${guess} is too high!`;
    } else return `${guess} is too low!`;
  };
}

let game = guessingGame();

module.exports = { guessingGame };
