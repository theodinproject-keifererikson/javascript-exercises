const reverseString = function(str) {
  let reverse = str.split("").reverse().join("");
  return reverse; 
}

module.exports = reverseString
