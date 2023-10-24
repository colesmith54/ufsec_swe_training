const initGame = () => {
  const startGame = confirm("Shall we play rock paper scissors?");
  startGame ? playGame() : alert("Okay, maybe another time.");
}

const playGame = () => {
  while (true) {
    let playerChoice = getPlayerChoice();
    playerChoice = formatPlayerChoice(playerChoice);
    if (playerChoice === "") {
      invalidChoice();
      continue;
    }
    if (!playerChoice) {
      decidedNotToPlay();
      break;
    }
    playerChoice = evaluatePlayerChoice(playerChoice);
    if (!playerChoice) {
      invalidChoice();
      continue;
    }
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    displayResult(result);
    if (askToPlayAgain()) {
      continue;
    } else {
      thanksForPlaying();
      break;
    }
  }
}

const getPlayerChoice = () => {
  return prompt("Rock, paper, or scissors?");
}

const formatPlayerChoice = (playerChoice) => {
  return (playerChoice || playerChoice === "") ? playerChoice.trim().toLowerCase() : false;
}

const evaluatePlayerChoice = (playerChoice) => {
  if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
    return playerChoice;
  } else {
    return false;
  }
}

const decidedNotToPlay = () => {
  alert("I guess you don't want to play.");
}

const invalidChoice = () => {
  alert("Please enter rock, paper, or scissors.");
}

const getComputerChoice = () => {
  const computerChoice = Math.random() * 3 + 1;
  if (computerChoice <= 1) {
    return "rock";
  } else if (computerChoice <= 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

const determineWinner = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "tie";
  } else if (playerChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else {
    if (computerChoice === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

const displayResult = (result) => {
  if (result === "tie") {
    alert("It's a tie!");
  } else if (result === "player") {
    alert("You win!");
  } else {
    alert("You lose!");
  }
}

const askToPlayAgain = () => {
  return confirm("Would you like to play again?");
}

const thanksForPlaying = () => {
  alert("Thanks for playing!");
}

initGame();