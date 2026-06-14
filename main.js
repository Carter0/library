
const library = [];

function Book(title, author, pages, hasRead) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info = function () {
        return `${this.title} by ${this.author} contains ${this.pages}`;
    }
}


function addBookToLibrary(title, author, pages, hasRead) {
    const book = new Book(title, author, pages, hasRead);
    library.push(book);
}

// Loops through the array and displays each book on the page. 
function displayBooks(library) {
    const container = document.getElementById('container');


    library.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bookCard');

        const textNode1 = document.createTextNode(book.title);
        const textNode2 = document.createTextNode(book.author);

        container.append(bookDiv);
        bookDiv.append(textNode1, textNode2);
    });
}

// Add 10 dummy books
addBookToLibrary('The Great Gatsby', 'F. Scott Fitzgerald', 180, true);
addBookToLibrary('1984', 'George Orwell', 328, true);
addBookToLibrary('To Kill a Mockingbird', 'Harper Lee', 281, true);
addBookToLibrary('Pride and Prejudice', 'Jane Austen', 279, false);
addBookToLibrary('The Catcher in the Rye', 'J.D. Salinger', 277, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, true);
addBookToLibrary('Harry Potter and the Sorcerer\'s Stone', 'J.K. Rowling', 309, true);
addBookToLibrary('The Lord of the Rings', 'J.R.R. Tolkien', 1178, false);
addBookToLibrary('Dune', 'Frank Herbert', 682, true);
addBookToLibrary('The Hunger Games', 'Suzanne Collins', 374, true);


console.table(library);

displayBooks(library);


