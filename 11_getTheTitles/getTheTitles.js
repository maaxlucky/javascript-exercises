const getTheTitles = function(books) {
    const bookArr = []
    books.map((books) => bookArr.push(books.title))
    return bookArr

};

// Do not edit below this line
module.exports = getTheTitles;
