const sumAll = function(num1, num2) {
  let lowEnd; 
  let highEnd;
  const range = [];
  let sum = 0;

  // Error checks
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  } else if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return 'ERROR'
  }
  // Setting lowEnd and highEnd regardless of order
  if (num1 < num2) {
    lowEnd = num1;
    highEnd = num2
  } else if (num1 > num2) {
    highEnd = num1;
    lowEnd = num2;
  } else {
    return 'ERROR';
  }
  // Creating array of all numbers
  for (i = lowEnd; i <= highEnd; i++) {
    range.push(i);
  }
  // Adding all numbers in array together
  for (i = 0; i < range.length; i++) {
    sum += range[i];
  }

  return sum;
}

module.exports = sumAll
