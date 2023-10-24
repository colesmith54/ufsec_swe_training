let playGame = confirm("Shall we play rock paper scissors?");

if (playGame) {
  let playerChoice = prompt("Rock, paper, or scissors?");
  if (playerChoice) {
    playerChoice = playerChoice.trim().toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
      let computerChoice = Math.random() * 3 + 1;
      if (computerChoice <= 1) {
        computerChoice = "rock";
      } else if (computerChoice <= 2) {
        computerChoice = "paper";
      } else {
        computerChoice = "scissors";
      }

      if (playerChoice === computerChoice) {
        alert("It's a tie!");
      } else if (playerChoice === "rock") {
        if (computerChoice === "paper") {
          alert("You lose! Paper beats rock.");
        } else {
          alert("You win! Rock beats scissors.");
        }
      } else if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
          alert("You lose! Scissors beats paper.");
        } else {
          alert("You win! Paper beats rock.");
        }
      } else {
        if (computerChoice === "rock") {
          alert("You lose! Rock beats scissors.");
        } else {
          alert("You win! Scissors beats paper.");
        }
      }

      let playAgain = confirm("Would you like to play again?");
      playAgain ? location.reload() : alert("Okay, maybe another time.");
    } else {
      alert("Please enter rock, paper, or scissors.");
    }
  } else {
    alert("I guess you don't want to play.");
  }
} else {
  alert("Okay, maybe another time.")
}