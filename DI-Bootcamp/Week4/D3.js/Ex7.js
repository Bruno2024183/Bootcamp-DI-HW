<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=devive=width, initial-scale=1.0">
    <title>Book List</title>
</head>
<body>
    <section class="listBooks"></section>

    <script class="script.js"></script>
</body>
</html>


// Create an array called allBooks with 2 book objects
const allBooks = [
    {
        title: "The Great Gatsby"
        author: "F. Scott Fitzgerald",
        image: "https://example.com/gatsby.jpg", // Replace with and actual image URL
        alreadyRead: true
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        image: "https: //example.com/mockingbird.jpg", // Replace with an actual image URL
        alreadyRead: false
    }
];

// Select the section where the books will be displayNumbersDisvisible
const section = document.querySelector('.listBooks');

// Loop through each book and render it inside a div
allBooks.forEach(book => {
    // Create a new div for each book
    const bookDiv = document.createElement('div');

    // Create a paragraph for the book title and author
    const bookInfo = document.createElement('p');
    bookInfo.textContent = `${book.title} written by ${book.author}`;

    // Set the color to red if the book is already read
    if (book.alreadyRead) {
        bookInfo.style.color = 'red';
    }

    // Create an image element for the book cover
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';

    // Append the book info and image to the book div
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(bookImage);

    // Append the book div to the section
    section.appendChild(bookDiv);
});