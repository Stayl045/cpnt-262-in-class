const foods = [
  "pizza",
  "fries",
  "spaghetti",
  "burger",
  "taco",
  "rice",
  "steak",
  "salad",
  "cookies",
  "curry",
  "jalebi",
  "soup",
  "salmon",
  "spring roll",
  "shawarma",
  "bread",
  "shrimp",
  "noodles",
  "roti",
];

console.log(foods);

let output = "";

for (let i = 0; i <= foods.length - 1; i++) {
  output += `<li>${foods[i]}</li>`;
  // output = `${output<li>${foods[1]}</li>`;
  console.log(foods[i]);
}

document.querySelector(".output").innerHTML = `<ul>${output}</ul>`;
