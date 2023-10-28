// window.alert("ok!");
// alert("ok!"); // window is implied

// console.log(window.location);
// console.log(location); // window is implied

const myArray = ["eat", "sleep", "code"];
const myObj = {
  name: "cole",
  hobbies: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

// local storage is persistent
// session storage is not

sessionStorage.setItem("mySessionStore", JSON.stringify(myObj));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));

// local and session storage only store strings

console.log(mySessionData);

sessionStorage.setItem("mySessionStoreA", JSON.stringify(myArray));
const mySessionArray = JSON.parse(sessionStorage.getItem("mySessionStoreA"));

console.log(mySessionArray);

sessionStorage.removeItem("mySessionStore");

console.log(JSON.parse(sessionStorage.getItem("mySessionStore")));

sessionStorage.clear();

console.log(sessionStorage);
