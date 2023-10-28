function sum(num1, num2) {
  if (num2 === undefined) {
    num2 = 0;
  }
  return num1 + num2;
}

const getUserNameFromEmail = (email) => {
  return email.split('@')[0];
}

const toProperCase = (name) => {
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}