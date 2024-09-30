const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());  // Middleware to parse JSON request bodies

// Basic data array with some book objects
let books = [
    { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', publishedYear: 1951 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', publishedYear: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', publishedYear: 1949 }
];

// GET /api/books - Return all books
app.get('/api/books', (req, res) => {
    res.json(books);
});

// GET /api/books/:bookId - Return a specific book by its ID
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.bookId);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
});

// POST /api/books - Create a new book
app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;

    // Create a new book object with an auto-incremented ID
    const newBook = {
        id: books.length + 1,
        title,
        author,
        publishedYear
    };

    // Add the new book to the books array
    books.push(newBook);

    // Return the newly created book with status 201 (Created)
    res.status(201).json(newBook);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});