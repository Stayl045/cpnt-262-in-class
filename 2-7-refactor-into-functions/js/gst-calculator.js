const gstCalculator = (subTotal, total) => {
  console.log(`$${subTotal} plus GST is $${total}.toFixed(1)`);
};

const subTotal = 42;

// Enclose the following code in a function that accepts subTotal as a parameter
const total = subTotal * 0.05 + subTotal;

gstCalculator(subTotal, total);
