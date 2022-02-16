// let string = "mIsSIssIPPi";

let string = prompt("what is your home town?");

// Enclose the following code in a function that accepts a string as a parameter
console.log(
  (string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase())
);
