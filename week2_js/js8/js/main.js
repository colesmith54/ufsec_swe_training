switch (Math.floor(Math.random() * 4) + 1) {
  case 1:
    console.log("one");
    break;
  case 2:
    console.log("two");
    break;
  case 3:
    console.log("three");
    break;
  default:
    console.log("other");
}

let player = "rock";
let computer = "scissors";

switch (player) {
  case computer:
    console.log("Tie!");
    break;
  case "rock":
    switch (computer) {
      case "paper":
        console.log("Computer wins!");
        break;
      default:
        console.log("Player wins!");
    }
    break;
  case "paper":
    switch (computer) {
      case "scissors":
        console.log("Computer wins!");
        break;
      default:
        console.log("Player wins!");
    }
    break;
  case "scissors":
    switch (computer) {
      case "rock":
        console.log("Computer wins!");
        break;
      default:
        console.log("Player wins!");
    }
    break;
  default:
    console.log("Invalid input!");
}