const totalBooksCount = (books) => {
  let total = books.length;
  return total
 }
 function totalAccountsCount(accounts){
   let total = accounts.length;
   return total
 }
 
 function booksBorrowedCount(books){
   let result = 0;
   for(index in books){
     if(books[index].borrows.find((idx)=> idx.returned === false)) result += 1;
   }
   return result;
 }
 
 function countOfInstances(arr,tgt){
   let result = arr.reduce((acc,idx)=> {
     (tgt===idx ? acc += 1 : acc)
     return acc;
   }, 0)
   return result;
 }
 
 function getTopFive(arr){
   return arr.sort((itemA,itemB)=>itemA.count < itemB.count ? 1 : -1).slice(0,5);
 }
 
 function getMostCommonGenres(books){
   let result = [];
   for(book in books){
     let{genre} = books[book]
     if(!result.find((index)=> index.name === genre)){
       result.push({name:genre,count:countOfInstances(books.map((book)=>book.genre),genre)})
     }
   }
   return getTopFive(result)
  }
 
 function getMostPopularBooks(books){
   let result = [];
   for(book in books){
     const{title,borrows} = books[book]
     if(!result.includes(title)){
       result.push({name:title,count:borrows.length})
     }
   }
   return getTopFive(result);
 }
 
 function getMostPopularAuthors(books, authors){
   let result =[];
   for (author in authors){
     const{id,name} = authors[author]
     const fullname = `${name.first} ${name.last}`
     if(!result.find((index)=> index.name == fullname)){
       let anthology = books.filter((book)=> book.authorId === id)
       let totalborrows = 0
       for(book in anthology){
         totalborrows += anthology[book].borrows.length;
       }
       result.push({name:fullname,count:totalborrows});
     }
   }
   return getTopFive(result);
 }

 
 module.exports = {
   totalBooksCount,
   totalAccountsCount,
   booksBorrowedCount,
   getMostCommonGenres,
   getMostPopularBooks,
   getMostPopularAuthors,
 };
 