let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

const myBook = new Book('my book', 'hasan', 6, 'Not Read')
addBookToLibrary(myBook, 0)

function addBookToLibrary(book, index) {
    bookCard = document.createElement('div');
    bookCard.className = 'book-card';
    bookCard.dataset.book = index;
    title = document.createElement('h3')
    title.textContent = `Title: ${book.title}`;
    title.className = 'book-title';
    bookCard.appendChild(title);
    author = document.createElement('h4')
    author.textContent = `Author: ${book.author}`;
    author.className = 'book-author';
    bookCard.appendChild(author);
    pages = document.createElement('p')
    pages.textContent = `Pages: ${book.pages}`;
    pages.className = 'book-title';
    bookCard.appendChild(pages);
    
    const statusButton = document.createElement('button');
    statusButton.className = 'status-button';
    statusButton.dataset.book = index;
    statusButton.textContent = book.status;
    statusButton.addEventListener('click', () => {
        // changeStatus(index);
        statusButton.textContent = myLibrary[index].status;
    })
    bookCard.appendChild(statusButton)

    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete';
    deleteButton.dataset.book = index;
    deleteButton.addEventListener('click', () => {
        // deleteBook(index)
    })
    bookCard.appendChild(deleteButton)

    document.getElementById('library').appendChild(bookCard)
}

const form = document.getElementById('new-book-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = form.querySelector('input[name="title"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = parseInt(form.querySelector('input[name="pages"]').value);
    const status = form.querySelector('select[name="status"]').value;
    newBook = Book(title, author, pages, status)
    myLibrary.push(newBook)
})
