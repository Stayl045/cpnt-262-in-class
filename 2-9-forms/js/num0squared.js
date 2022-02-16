// Create form and button variables here
const button = document.querySelector("button");
const inputSubTotal = document.querySelector("input");
const output = document.querySelector(".output");

// Fat arrow ES6 Syntax
const clickHandler = () => {
  // Refactor to assign value from form field
  // const num = 15;
  const num = Number(inputSubTotal.value);

  const numSquared = num * num;

  // Refactor to output response to paragraph element
  console.log(`${num} squared is ${numSquared}.`);
  const response = `${num} squared is ${numSquared}`;
  output.textContent = response;
};

// Add `click` event listener to button here

button.addEventListener("click", clickHandler);
