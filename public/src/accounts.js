function findAccountById(accounts, id){
  return accounts.find((accnt) => accnt.id === id);
}
function sortAccountsByLastName(accounts) {
  return accounts.sort((accntA,accntB) => accntA.name.last > accntB.name.last ? 1 : -1);
}
function numberOfBorrows(account, books){
  let result = 0;
  for(let index in books){
    if (books[index].borrows.find((idx)=> idx.id === account.id )) result += 1;
  }
  return result;
}

function getBooksPossessedByAccount(account, books, authors){
  let result = [];
  for(let book in books){
    let currentbook = books[book];
    const{id,title,genre,borrows}=currentbook;
    for(let transaction in borrows){
      if(borrows[transaction].id === account.id && borrows[transaction].returned === false){
        for(let authSelected in authors){
          let author = authors[authSelected];
          if(author.id === currentbook.authorId){
            let tempBook = {id,title,genre,author,borrows};
            result.push(tempBook);
          }
        }
      }
    }
  }
  return result;
}


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  numberOfBorrows,
  getBooksPossessedByAccount,
};
