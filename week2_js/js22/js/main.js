// syntax: addEventListener(event, callback)

// const doSomething = () => {
//   alert("doing something");
// };

// h1.addEventListener("click", doSomething, false);
// h1.removeEventListener("click", doSomething, false);

// h1.addEventListener("click", (event) => {
//   console.log(event);
//   console.log(event.target);
//   event.target.textContent = "boo!";
// });

document.addEventListener("readystatechange", (event) => {
  if (event.target.readyState === "complete") {
    console.log("DOM fully loaded and parsed");
    initApp();
  }
});

const initApp = () => {
  const h1 = document.querySelector("h1");

  // if h1 was in a div, the event would bubble up to the div
  // useCapture makes events happen from the top down
  // stopPropagation stops the event from moving to other elements
  h1.addEventListener("click", (event) => {
    // if used event.target.style.color, it would only change the color of the h1
    h1.classList.add("spooky");
    h1.classList.remove("happy");
    h1.classList.toggle("hmmmmm");

    const text = h1.textContent;
    text === "boo!" ? (h1.textContent = "hello!") : (h1.textContent = "boo!");
  });

  h1.addEventListener("mouseover", (event) => {
    h1.classList.add("activated!");
  });

  h1.addEventListener("mouseout", (event) => {
    h1.classList.remove("activated!");
  });
};

// forms send data somewhere and reload the page by default
// preventDefault stops the default behavior
