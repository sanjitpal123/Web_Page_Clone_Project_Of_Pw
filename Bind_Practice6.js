//Create an object book with properties title and author. Write a function printDetails that logs "Title: [title], Author: [author]". Use bind() to create a new function bookInfo that always prints the details of the book.
const book={
    title:'C Programming',
    author:'Sanjit pal'
}
function printDetails()
{
    console.log(`Title:[${this.title}] and Author:[${this.author}]`);
}
const ff=printDetails.bind(book);
ff();


