const leapYears = function(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0 && year % 400) {
      return false;
    } else {
      return true;
    }
  }
  return false;
}

module.exports = leapYears
