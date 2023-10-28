const myObj = {
  name: "Cole",
  hobbies: ["math", "coding", "badminton"],
  hello: function () {
    return `Hello, ${this.name}!`;
  },
};

console.log(myObj);
console.log(myObj.hello());
console.log(typeof myObj);

// JSON does not support functions, only data.
const sendJSON = JSON.stringify(myObj);

// can no longer access data since it's a string
console.log(sendJSON);
console.log(typeof sendJSON);

const receiveJSON = JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);
