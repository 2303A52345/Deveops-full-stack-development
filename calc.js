function add(a, b) {
  return a + b;
}

module.exports = add;
const addFromModule = require('./calc'); 
console.log(addFromModule(5, 7));



