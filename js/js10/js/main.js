let myBoolean = confirm('Ok === true\nCancel === false');
console.log(myBoolean);

let name = prompt('What is your name?');
if (name) {
  console.log(name.trim());
} else {
  console.log('No name :(');
}