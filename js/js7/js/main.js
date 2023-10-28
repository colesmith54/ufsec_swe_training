
let soup = "tomato";
let customerIsBanned = false;
let crackers = true;
let reply;

if (customerIsBanned) {
  reply = "You are banned! No soup for you!";
} else if (soup && crackers) {
  reply = `Yummy ${soup} soup with crackers!`;
} else if (soup) {
  reply = `Yummy ${soup} soup! no crackers :(`;
} else {
  reply = `Oh no! No ${soup} soup for you today.`;
}

console.log(reply);

let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}

console.log(grade);

player = "rock";
cpu = "paper";

if (player === cpu) {
  console.log("Tie!");
}
else if (player === "rock") {
  if (cpu === "paper") {
    console.log("CPU wins!");
  } else {
    console.log("Player wins!");
  }
}
else if (player === "paper") {
  if (cpu === "scissors") {
    console.log("CPU wins!");
  } else {
    console.log("Player wins!");
  }
}
else if (player === "scissors") {
  if (cpu === "rock") {
    console.log("CPU wins!");
  } else {
    console.log("Player wins!");
  }
}
else {
  console.log("Invalid input!");
}