let myNumber = 0;
while (myNumber < 50) {
  myNumber++;
  console.log(myNumber);
}

do {
  console.log(myNumber);
} while (myNumber < 0);

//dont do dis
//while (true) {
//  console.log('hello');
//}

let name = "cole";
for (let i = 0; i < name.length; i++) {
  console.log(name.charAt(i));
}

let counter = 0;
let myLetter;
while (counter < name.length) {
  myLetter = name[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  counter++;
}