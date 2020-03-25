const sumAll = function(lowEnd, highEnd) {
  let sum = 0;
  // Error checks
  if (num1 < 0 || num2 < 0) {
    return 'ERROR';
  } else if (typeof num1 !== "number" || typeof num2 !== "number") {
    return 'ERROR'
  }
  // Setting lowEnd and highEnd regardless of order
  if (lowEnd > highEnd) {
    const temp = lowEnd;
    lowEnd = highEnd;
    highEnd = temp;
  }
  // Creating array of all numbers
  for (i = lowEnd; i <= highEnd; i++) {
    sum += i;
  }
  return sum;
}

module.exports = sumAll
