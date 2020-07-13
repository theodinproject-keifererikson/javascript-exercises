function caesar(str, shift) {
  const strArr = str.split('');
  let charArr = [];
  let newString = '';
  
  for (i = 0; i < str.length; i++) {
    let charCode = strArr[i].charCodeAt();
    if (charCode < 65 || (charCode < 97 && charCode > 90) || charCode > 122){
      if (charCode == 32 || charCode == 33 || charCode == 44) {
        charArr.push(charCode);
        // console.log(charArr);
        continue;
      }
      continue;
    } else {
      charArr.push(charCode + shift);
      // console.log(charArr);
    }
  }

  charArr.forEach((e) => {
    newString += String.fromCharCode(e);
  });
  // console.log(newString);
  return newString;
}

// caesar('This! is, a test zzz', 1);

module.exports = caesar
