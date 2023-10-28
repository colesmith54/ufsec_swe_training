// i dont have the html file to test this code

const view1 = document.getElementById("view1");

const view2 = document.querySelector("#view2");

// view1.style.display = "none";
// view2.style.display = "flex";

// returns html collection
const views1 = document.getElementsByClassName("view");

// returns node list
const views2 = document.querySelectorAll(".view");

// const divs = view1.querySelectorAll("div");
// const divs2 = view1.getElementsByTagName("div");

// const evenDivs = view1.querySelectorAll("div:nth-of-type(2n)");

// for (let i = 0; i < evenDivs.length; i++) {
// evenDivs[i].style.backgroundColor = "darkblue";
// evenDivs[i].style.width = "200px";
// evenDivs[i].style.height = "200px";
// }

const navText = document.querySelector("h1");
navText.textContent = "haha u got changed";

const navbar = document.querySelector("nav");
// navbar.innerHTML = "<h1>Hello!</h1><p>How are you?</p>";

// navbar.style.justifyContent = "space-between";
// console.log(views2[0].parentElement.children);
// console.log(views2[0].parentElement.childNodes);
// console.log(views2[0].parentElement.hasChildNodes);
// console.log(views2[0].parentElement.lastChild);
// console.log(views2[0].parentElement.lastElementChild);

// console.log(views2[0].nextSibling);
// console.log(views2[0].nextElementSibling);
// console.log(views2[0].previousSibling);

// while (view2.lastChild) {
//   view2.lastChild.remove();
// }

const createDivs = (parent, iter) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = `div ${iter}`;
  newDiv.style.backgroundColor = "green";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "10px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.appendChild(newDiv);
};

for (let i = 0; i < 5; i++) {
  createDivs(navText, i);
}
