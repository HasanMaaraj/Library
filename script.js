let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

Book.prototype.changeStatus = function() {
    if (this.status === 'Read') {
        this.status = "Not Read";
    } else {
        this.status = "Read";
    }
}

const myBook = new Book('my book', 'hasan', 100, 'Read')
myLibrary.push(myBook)

const myOtherBook = new Book('my other book', 'hasan', 200, 'Not Read')
myLibrary.push(myOtherBook)

function displayAllBooks() {
    // Display all books in the array
    for(let i=0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i], i);
    }
}

displayAllBooks();

const form = document.getElementById('new-book-form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    addBookToLibrary();
});

function addBookToLibrary() {
    const title = form.querySelector('input[name="title"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = parseInt(form.querySelector('input[name="pages"]').value);
    const status = form.querySelector('select[name="status"]').value;
    // Clear form fields
    form.querySelector('input[name="title"]').value = '';
    form.querySelector('input[name="author"]').value = '';
    form.querySelector('input[name="pages"]').value = '';
    // Create book object and append it to the array
    newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBook(newBook, myLibrary.length-1);
}

function displayBook(book, index) {
    // Define the card container for the book information
    bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.dataset.book = index;
    // Define and append the title for the book
    title = document.createElement('h3');
    title.textContent = `Title: ${book.title}`;
    title.className = 'book-title';
    bookCard.appendChild(title);
    // Define and append the author of the book
    author = document.createElement('h4');
    author.textContent = `Author: ${book.author}`;
    author.className = 'book-author';
    bookCard.appendChild(author);
    // Define and append the pages of the book
    pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    pages.className = 'book-title';
    bookCard.appendChild(pages);
    
    // Define and append the read status button
    const statusButton = document.createElement('button');
    statusButton.className = 'status-button';
    statusButton.dataset.book = index;
    statusButton.textContent = book.status;
    statusButton.addEventListener('click', () => {
        book.changeStatus();
        statusButton.textContent = book.status;
    })
    bookCard.appendChild(statusButton);

    // Define and append the delete button for the book
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.book = index;
    deleteButton.addEventListener('click', () => {
        deleteBook(index);
    })
    bookCard.appendChild(deleteButton)
    // Append the book card
    document.getElementById('library').appendChild(bookCard);
}


function deleteBook(index) {
    myLibrary.splice(index, 1);
    document.querySelector(`.book-card[data-book="${index}"]`).remove();
    
}

