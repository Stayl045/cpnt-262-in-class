const tipCalulator = (billTotal, tipRate) => {
  console.log(`${tipPercentage} tip on $${billTotal} is $${tip}.`);
};

const billTotal = 40;
const tipRate = 0.18;

// Enclose the following code in a function that accepts subTotal and tipRate as parameters
const tip = billTotal * tipRate;
const tipPercentage = `${tipRate * 100}%`;

tipCalulator(billTotal, tipRate);
