//4. Filtering and Capitalizing: Books Published After 2010 with Author 
let books = [
    { title: "Book A", author: "john doe", year: 2008 },
    { title: "Book B", author: "jane smith", year: 2012 },
    { title: "Book C", author: "peter parker", year: 2015 }
];

let filteredBooks = books.filter(book => book.year > 2010).map(book => {
    book.author = book.author.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    return book;
});

console.log(filteredBooks);
// Output: [{ title: "Book B", author: "Jane Smith", year: 2012 }, { title: "Book C", author: "Peter Parker", year: 2015 }]
