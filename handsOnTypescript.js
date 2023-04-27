/*Define an interface Book with the following properties:
id (number)
title (string)
author (string)
published (Date)
available (boolean)*/
;
//Create an array books with the type Book[] and add a few sample books to the array.
const books = [
    { id: 1,
        title: 'The Lovely Bones',
        author: 'Alice Sebold',
        published: new Date(7 - 3 - 2002),
        available: true,
    },
    { id: 2,
        title: 'The Giver',
        author: 'Lois Lowry',
        published: new Date(4 - 16 - 1993),
        available: false,
    },
    { id: 3,
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published: new Date(7 - 11 - 1960),
        available: false,
    },
];
/*Define a function addBook(book: Book): void that takes a Book object as a parameter
and adds it to the books array.*/
function addBook(book) {
    books.push(book);
}
/*Define a function findBookById(id: number): Book | undefined that takes a book id as a parameter
and returns the book with the given id or undefined if the book is not found.*/
function findBookById(id) {
    return books.find((book) => book.id === id);
}
    
/*Define a function updateBook(book: Book): boolean that takes a Book object as a parameter, finds the book with the same id in the books array,
and updates its properties. The function should return true if the book was updated successfully or false if the book was not found.*/
function updateBook(book) {
    let index = books.findIndex((bb) => bb.id === book.id);
    if (index === -1) {
        return false;
    } 
    books [index] = book;
    return true;
}

/*Define a function removeBook(id: number): boolean that takes a book id as a parameter and removes the book with the given id from the books array.
The function should return true if the book was removed successfully or false if the book was not found.*/
function removeBook(id) {
    let index = books.findIndex ((rb) => rb.id === id)
    if (index === -1) {
        return false;
    }
    books.splice (index, 1);
    return true;
};

//Test your functions by adding, updating, and removing books, and finding books by their id.

/*addBook ({
    id: 4,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    published: new Date (8 - 14 - 2008),
    available: true,
}) */
//console.log (books)


//let book = findBookById(2);
//console.log (book)

//removeBook (3);
//console.log (books)

/*updateBook ({
    id: 1,
    title: 'This is a Different Title',
})*/ 
//console.log (books)
