const removeFromArray = function(arr, ...remove) {
  let array = [];

  arr.forEach((match) => {
    if (!remove.includes(match)) {
      array.push(match);
    }    
  });
  return array;
}

module.exports = removeFromArray
