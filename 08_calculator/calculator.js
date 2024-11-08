const add = function(val1, val2) {
  return val1 + val2;
	
};

const subtract = function(val1, val2) {
	return val1 - val2;
};

const sum = function(numbers) {
	return numbers.reduce(add, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((initialVal, current )=>{
    return initialVal*current
  }, 1);

};

const power = function(base, power) {
  
  if (power === 0){
    return 1;
  }
  let result = 1

  for (let i=1; i <= power; i++){
    result *= base
  }
  return result;
	
};

const factorial = function(val) {
  if (val === 0){
    return 1;
  }
  result = 1
  while(val > 0){
    result *= val;
    val--;
  }
  return result
	
};

console.log(factorial(0));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
