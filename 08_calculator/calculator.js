const add = function(a, b) {
  return a+b
};

const subtract = function(a, b) {
  return a - b
};

const sum = function(array) {
  let sum = 0;
  array.forEach((num) => sum += num)
  return sum
};

const multiply = function(array) {
  let sum = 1;
  array.forEach((num) => sum *= num)
  return sum
};

const power = function(a, b) {
  return a**b
};

const factorial = function(a) {
  if( a === 0){
    return 1
  }
  else {
    return a * factorial(a-1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
