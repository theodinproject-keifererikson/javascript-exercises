const palindromes = function(phrase) {
  const cleanPhrase = phrase.toLowerCase().replace(/[^a-zA-Z]/g, '');  
  const reversedPhrase = cleanPhrase.split('').reverse().toString().replace(/,/g, '');;

  if (cleanPhrase === reversedPhrase) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindromes
