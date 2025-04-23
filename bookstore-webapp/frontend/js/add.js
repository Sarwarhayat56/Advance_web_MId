document.getElementById('bookForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const price = document.getElementById('price').value;

    try {
        const res = await fetch('http://localhost:5000/api/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, author, price }),
        });

        const data = await res.json();
        console.log(data); // Debug log

        if (res.ok) {
            alert('Book added!');
            window.location.href = 'index.html';
        } else {
            alert('Error: ' + data.message);
        }
    } catch (err) {
        console.error('Error:', err);
        alert('Failed to add book');
    }
});
