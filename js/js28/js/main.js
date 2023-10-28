document.querySelector("h1").addEventListener("click", function () {
  const regex = /^\(?(\d{3})\)?[-. ]?(\d{3})[-. ]?(\d{4})$/g;
  const input = document.querySelector("h1");
  const phone = input.innerText;

  const found = regex.test(phone);
  if (!found && phone.length) {
    console.log("oopsie woopsie");
  } else {
    console.log("yaysie waysie");
  }

  const format = /[()-. ]/g;
  const formattedNum = phone.replaceAll(format, "");
  console.log(formattedNum);
});

// for city names
// regex = /{2,}/g;
// newText = text.replaceAll(regex, " ").trim();
// toSend = encodeTRI(newText);
