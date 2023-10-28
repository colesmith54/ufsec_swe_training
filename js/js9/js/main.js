let soup = "chicken noodle";
let isCustomerBanned = false;

let soupAccess = isCustomerBanned ? "No soup for you!" : soup ? "Yes, we have soup." : "Sorry, no soup today.";

console.log(soupAccess);

let testScore = 79;
let myGrade = testScore >= 90 ? "A" : testScore >= 80 ? "B" : testScore >= 70 ? "C" : testScore >= 60 ? "D" : "F";

console.log(`My grade is a ${myGrade}`);


let playerOne = "paper";
let computer = "scissors";
let result = playerOne === computer ? "Tie!" : playerOne === "rock" ? computer === "paper" ? "Computer wins!" : "Player wins!" : playerOne === "paper" ? computer === "scissors" ? "Computer wins!" : "Player wins!" : playerOne === "scissors" ? computer === "rock" ? "Computer wins!" : "Player wins!" : "Invalid input!";

console.log(result);