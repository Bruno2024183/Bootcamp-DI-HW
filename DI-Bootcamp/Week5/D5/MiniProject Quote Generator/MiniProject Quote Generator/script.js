let quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 },
    { id: 1, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 2, author: "Maya Angelou", quote: "You will face many defeats in life, but never let yourself be defeated.", likes: 0 },
    { id: 3, author: "Mark Twain", quote: "The secret of getting ahead is getting started.", likes: 0 },
    { id: 4, author: "Walt Disney", quote: "The way to get started is to quit talking and begin doing.", likes: 0 }
];

let lastQuoteId = null;
let currentQuote = null;
let filteredQuotes = [];
let currentFilteredIndex = 0;

// Generate Random Quote
document.getElementById('generateQuoteBtn').addEventListener('click', function() {
    let randomQuote;
    do {
        randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (randomQuote.id === lastQuoteId);

    lastQuoteId = randomQuote.id;
    currentQuote = randomQuote;

    displayQuote(randomQuote);
    updateQuoteInfo();
});

// Add New Quote
document.getElementById('addQuoteForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newQuoteText = document.getElementById('newQuote').value;
    const newAuthorText = document.getElementById('newAuthor').value;

    const newQuote = {
        id: quotes.length,
        author: newAuthorText,
        quote: newQuoteText,
        likes: 0
    };

    quotes.push(newQuote);
    document.getElementById('addQuoteForm').reset();
    alert("New quote added successfully!");
});

// Update buttons info with the current quote
function updateQuoteInfo() {
    if (currentQuote) {
        document.getElementById('charWithSpacesBtn').innerText = `Characters (with spaces): ${currentQuote.quote.length}`;
        document.getElementById('charWithoutSpacesBtn').innerText = `Characters (without spaces): ${currentQuote.quote.replace(/\s/g, '').length}`;
        document.getElementById('wordCountBtn').innerText = `Word Count: ${currentQuote.quote.split(/\s+/).length}`;
    }
}

// Display Quote in the DOM
function displayQuote(quote) {
    document.getElementById('quote').innerHTML = `
        <p>"${quote.quote}"</p>
        <footer>— ${quote.author}</footer>
    `;
    document.getElementById('likeCount').innerText = quote.likes;
}

// Like the Quote
document.getElementById('likeQuoteBtn').addEventListener('click', function() {
    if (currentQuote) {
        currentQuote.likes += 1;
        document.getElementById('likeCount').innerText = currentQuote.likes;
    } else {
        alert("Please generate a quote first!");
    }
});

// Filter Quotes by Author
document.getElementById('filterForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const authorFilter = document.getElementById('authorFilter').value.toLowerCase();
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === authorFilter);

    if (filteredQuotes.length > 0) {
        currentFilteredIndex = 0;
        displayFilteredQuote();
        document.getElementById('prevQuoteBtn').style.display = 'inline-block';
        document.getElementById('nextQuoteBtn').style.display = 'inline-block';
    } else {
        alert("No quotes found for the given author.");
        document.getElementById('prevQuoteBtn').style.display = 'none';
        document.getElementById('nextQuoteBtn').style.display = 'none';
    }
});

// Display the current filtered quote
function displayFilteredQuote() {
    const quote = filteredQuotes[currentFilteredIndex];
    displayQuote(quote);
    updateQuoteInfo();
}

// Navigate through filtered quotes
document.getElementById('prevQuoteBtn').addEventListener('click', function() {
    if (currentFilteredIndex > 0) {
        currentFilteredIndex--;
        displayFilteredQuote();
    }
});

document.getElementById('nextQuoteBtn').addEventListener('click', function() {
    if (currentFilteredIndex < filteredQuotes.length - 1) {
        currentFilteredIndex++;
        displayFilteredQuote();
    }
});