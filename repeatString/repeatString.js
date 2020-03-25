const repeatString = function(str, count) {
  let string = "";
  
  if (count < 0) {
    string = "ERROR";
  }

  for (i = count; i > 0; i--) {
    string += str;
  }
  return string;
}

module.exports = repeatString
