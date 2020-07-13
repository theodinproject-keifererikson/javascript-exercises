const caesar = function(string, shift) {
  return string
    .split("")
    .map(char => shiftChar(char, shift))
    .join("");
};

const codeSet = code => (code < 97 ? 65 : 97);

const mod = (n, m) => (n % m + m) % m;

const shiftChar = (char, shift) => {
  const code = char.charCodeAt();

  if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
    return String.fromCharCode(
      mod(code + shift - codeSet(code), 26) + codeSet(code)
    );
  }
  return char;
};

module.exports = caesar;



// function caesar(str, shift) {
//   const strArr = str.split('');
//   let charArr = [];
//   let cipher = '';
  
//   for (i = 0; i < str.length; i++) {
//     let charCode = strArr[i].charCodeAt();
//     if (charCode < 65 || (charCode < 97 && charCode > 90) || charCode > 122){
//       if (charCode == 32 || charCode == 33 || charCode == 44) {
//         charArr.push(charCode);
//         console.log(charArr);
//         continue;
//       }
//       continue;
//     } else {
//       charArr.push(charCode + shift);
//       console.log(charArr);
//     }
//   }

//   charArr.forEach((e) => {
//     cipher += String.fromCharCode(e);
//   });
//   console.log(cipher);
//   return cipher;
// }

// caesar('This! is, a test zzz', 2);

// // module.exports = caesar
