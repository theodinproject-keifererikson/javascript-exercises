const getTheTitles = function(books) {
  bookArr = [];

  bookArr.push(books[0].title)
  bookArr.push(books[1].title)

  return bookArr;
}

module.exports = getTheTitles;
