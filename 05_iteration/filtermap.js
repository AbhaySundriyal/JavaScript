// ********* FILTERMAP AND REDUCE ***************************

const cod = ["javascript " , "java","python" ,"cpp" , "ruby"]
const values = cod.forEach( (item) => {
    console.log(item);
    return item // undefined
})
console.log(values); // undefined 

const mynum = [1,2,3,4,5,6,7,8,9,10]
const newnum = mynum.filter( (num) => num > 4)
console.log(newnum); // [5,6,7,8,9,10]

const newnum = mynum.filter( (num) => {
     return num > 4
})
console.log(newnum); // [5,6,7,8,9,10]

const newnums = []
mynum.forEach ( (item) => {
    if (item > 4) {
        newnums.push(item)
    }
})
console.log(newnums); // [5,6,7,8,9,10]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userbook = books.filter( (bk) => bk.genre === 'HIstory' )
  console.log(userbook); // It will print all the book information whose genre is history .  

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);