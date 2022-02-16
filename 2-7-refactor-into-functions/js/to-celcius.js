const temperature = (tempF, tempC) => {
  console.log(`${tempF} degrees Fahrenheit is ${tempC} degrees Celcius`);
};

const tempF = 72;

// Enclose the following code in a function that accepts tempF as a parameter
const tempC = (5 / 9) * (tempF - 32);

temperature(tempF, tempC);
