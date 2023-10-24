var x = 1;
var x = 3;
console.log(x); //oops

//use const whenever possible
//otherwise use let

//global
var x = 1;
let y = 2;
const z = 3;

console.log(`global x: ${x}`);
console.log(`global y: ${y}`);
console.log(`global z: ${z}`);

function myFunc(){
  var x = 10;
  const z = 5;
  console.log(`function x: ${x}`);
  console.log(`function y: ${y}`);
  console.log(`function z: ${z}`);

  {
    //block scope
    var x = 4;
    let y = 5;
    const z = 6;
    console.log(`block x: ${x}`);
    console.log(`block y: ${y}`);
    console.log(`block z: ${z}`);
  }

  console.log(`function x: ${x}`); //hmmmmm
  console.log(`function y: ${y}`);
  console.log(`function z: ${z}`);
}
myFunc();