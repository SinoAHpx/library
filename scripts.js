document.getElementById('book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    addBook();
});

function addBook() {
    const name = document.getElementById('name').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;

    const bookList = document.getElementById('book-list');
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';
    bookItem.innerHTML = `
        <span>${name} by ${author}, ${pages} pages</span>
        <button class="remove-btn" onclick="removeBook(this)" aria-label="Remove ${name}">Remove</button>
    `;
    bookList.appendChild(bookItem);

    // Show the book list if it was hidden
    bookList.classList.remove('hidden');

    // Clear the form
    document.getElementById('book-form').reset();
}

function removeBook(element) {
    const bookItem = element.parentElement;
    bookItem.remove();

    // Hide the book list if there are no more books
    const bookList = document.getElementById('book-list');
    if (bookList.children.length === 0) {
        bookList.classList.add('hidden');
    }
}