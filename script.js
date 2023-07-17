let myLibrrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}



const form = document.getElementById('new-book-form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const title = form.querySelector('input[name="title"]').value;
    const author = form.querySelector('input[name="author"]').value;
    const pages = parseInt(form.querySelector('input[name="pages"]').value);
    const status = form.querySelector('select[name="status"]').value;
    newBook = Book(title, author, pages, status)
    myLibrrary.push(newBook)
})