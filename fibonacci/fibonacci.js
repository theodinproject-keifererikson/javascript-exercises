const fibonacci = function(count) {
  let fibArr = [1, 1];

  if (count < 0)  {return 'OOPS';}
  if (count == 0) {return 0;}
   
  for (i = 0; i < count - 2; i++) {
    fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
  }
  
  return fibArr[fibArr.length - 1];
}

module.exports = fibonacci
