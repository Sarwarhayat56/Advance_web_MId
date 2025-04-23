// Get all books
fetch('/api/books')
  .then(res => res.json())
  .then(data => {
    // Display books on page
  });

// Add a new book (POST)
fetch('/api/books', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: bookTitle,
    author: bookAuthor,
    price: bookPrice
  })
})
.then(res => res.json())
.then(data => {
  // Show success or redirect
});
