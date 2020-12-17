const findAuthorById = (authors, id) => authors.find((athr) => athr.id === id);

function findBookById(books, id){
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books){
let borrowedBooks = books.filter((book)=> book.borrows[0].returned==false)
let returnedBooks = books.filter((book)=> book.borrows[0].returned==true)
return [borrowedBooks, returnedBooks];
}
function getBorrowersForBook(books, accounts){
  let borrowers = [];
  accounts.forEach(account=>{
    books.borrows.forEach(transaction=>{
      if(transaction.id === account.id){
        let foundAccnt = {...account};
        foundAccnt.returned = transaction.returned;
        borrowers.push(foundAccnt);
      }
    })
  })
  return borrowers.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
