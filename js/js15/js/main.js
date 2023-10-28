const myArray = [];

myArray[0] = 'cole';
myArray[1] = 1001;
myArray[2] = true;

console.log(myArray);

console.log(myArray.length);

console.log(myArray[myArray.length - 1]);

myArray.push('new item');
console.log(myArray);

const lastItem = myArray.pop();
console.log(myArray);
console.log(lastItem);

const newLength = myArray.unshift('first item');
console.log(myArray);

const firstItem = myArray.shift();
console.log(myArray);

console.log(myArray[200]);

delete myArray[1];
console.log(myArray); //oopsies

// splice(start, deleteCount, item1, item2, ...)
myArray.splice(1, 1);
console.log(myArray);

const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(array);
const newArray = array.slice(2, 5);
console.log(newArray);
console.log(newArray.reverse());

const newString = newArray.join(' - ');
console.log(newString);

const arrayA = ['a', 'b', 'c'];
const arrayB = ['d', 'e', 'f'];

//old way
const arrayC = arrayB.concat(arrayA);

console.log(arrayC);

//new way
const arrayD = [...arrayB, ...arrayA];
console.log(arrayD);

const nestedArray = [['a', 'b', 'c'], ['d', 'e', 'f']];
console.log(nestedArray[0][1]);
console.log(nestedArray[1][2]);

const threeDArray = [[['a', 'b', 'c'], ['d', 'e', 'f']], [['g', 'h', 'i'], ['j', 'k', 'l']]];
console.log(threeDArray[0][1][2]);
console.log(threeDArray[1][0][1]);