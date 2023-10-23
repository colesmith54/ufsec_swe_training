const myNumber = 72;
const myFloat = 72.023456789
const myString = "72.123acv";

console.log(myNumber === myFloat);
console.log(myNumber === myString);

console.log(myString + 4);

console.log(Number(myString) + 4);
console.log(Number(myString) === myNumber);

console.log(Number("cole"));

console.log(Number(true), Number(false));

console.log(Number.isInteger(myNumber));
console.log(Number.parseFloat(myString).toFixed(2));
console.log(Number.parseInt(myFloat).toString());

console.log(Number.parseFloat(myString).toFixed(2).toString());

console.log(Number.isNaN(myString));
console.log(isNaN(myString));