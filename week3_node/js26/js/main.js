// function firstFunction(parameters, callback) {
//   callback();
// }

// callback hell
// firstFunction("param", function () {
//   secondFunction("param", function () {
//     thirdFunction("param", function () {
//       fourthFunction("param", function () {
//         fifthFunction("param", function () {
//           // ...
//         });
//       });
//     });
//   });
// });

// Promise
// 3 states: pending, fulfilled, rejected

// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Success hehe");
//   }, 2000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

// const users = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     const json = response.json();
//     return json;
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// const myUsers = {
//   userList: [],
// };

// const myCoolFunction = async () => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const json = await response.json();
//   return json;
// };

// const anotherFunc = async () => {
//   const data = await myCoolFunction();
//   myUsers.userList = data;
//   console.log(myUsers.userList);
// };

// anotherFunc();
// console.log(myUsers.userList); // oopsie woopsie

// fetch paramters: url, object

// const getJoke = async () => {
//   const response = await fetch("https://icanhazdadjoke.com", {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//     },
//   });
//   const json = await response.json();

//   console.log(json);
// };

// console.log(getAllUserEmails()); // Promise { <pending> } ooopsie woopsie

// const postToWebPage = (emails) => {
//   console.log(emails);
// };

// getJoke();

// const jokeObject = {
//   id: "iVSClyXDQf",
//   joke: 'A dad washes his car with his son. But after a while, the son says, "why can\'t you just use a sponge?"',
//   status: 200,
// };

// const postJoke = async (jokeObj) => {
//   const response = await fetch("https://httpbin.org/post", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(jokeObj),
//   });
//   const jsonResponse = await response.json();

//   console.log(jsonResponse.headers);
// };

// postJoke(jokeObject);

// const requestJoke = async (firstName, lastName) => {
//   const response = await fetch(
//     `http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}&limitTo=[nerdy]`
//   );
//   const jsonResponse = await response.json();

//   console.log(jsonResponse.value);
// };

// // rip cors
// requestJoke("Clint", "Eastwood");

const getDataFromForm = () => {
  const requestObj = {
    firstName: "Cole",
    lastName: "Smith",
    categories: ["nerdy"],
  };
  return requestObj;
};

const buildRequestURL = (requestData) => {
  const url = `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=[${requestData.categories}]`;
  return url;
};

const requestJoke = async (url) => {
  const response = await fetch(url);
  const jsonResponse = await response.json();
  const joke = jsonResponse.value.joke;

  postJokeToPage(joke);
};

const postJokeToPage = (joke) => {
  console.log(joke);
};

const processJokeRequest = async () => {
  const data = getDataFromForm();
  const url = buildRequestURL(data);
  await requestJoke(url); // 500 error ooopsie woopsie
  console.log("done");
};

processJokeRequest();
