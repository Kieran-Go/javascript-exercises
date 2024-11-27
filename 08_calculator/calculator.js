const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((total, currentNum) => {
    return total + currentNum;
  },0);
};

const multiply = function(arr) {
  return arr.reduce((total, currentNum) => {
    return total * currentNum;
  },1);
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	return num <= 1 ? 1 : num * factorial(num - 1);
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
