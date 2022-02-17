const sports = [
  "baseball",
  "football",
  "soccer",
  "basketball",
  "badminton",
  "tennis",
  "table tennis",
  "hockey",
  "volleyball",
  "fencing",
  "swimming",
  "water skiing",
  "water polo",
  "skating",
  "speed skating",
  "bobsled",
  "jet skiing",
];

// Use below code as starter for array to create a random item
const length = myArray.length;
const randNumber = Math.random();
const arrayRatio = randNumber * length;
const lowInteger = Math.floor(arrayRatio);
const myItem = myArray[lowInteger];

console.log(randNumber);
console.log(length);
console.log(arrayRatio);
console.log(lowInteger);

console.log(myItem);
