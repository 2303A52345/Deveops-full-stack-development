function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply
};
const calc = require('./calc');   
console.log("Sum:", calc.add(4, 6));
console.log("Product:", calc.multiply(4, 6));

