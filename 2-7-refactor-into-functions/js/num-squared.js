// const num = 15;
const num = prompt("Enter a number to square.");

// Fat arrow ES6 Syntax
const squared = (num) => {
  // Enclose the following code the following code in a function that accepts a number as a parameter
  const numSquared = num * num;

  console.log(`${num} squared is ${numSquared}.`);
};

squared(num);

const clickHandler = () => {
  const numSquared = prompt("Enter the squared");

  squared(num, numSquared);
};

// 2. Instead of manually invoking function, attach it to a button as an event listener
// 2a. Create a button variable
const button = document.querySelector(".squared");

// squared(num, numSquared);
button.addEventListener("click", clickHandler);
