//your JS code here. If required.
// Select form elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitButton = document.getElementById('submit');
const bookList = document.getElementById('book-list');

// Add event listener to submit button
submitButton.addEventListener('click', (e) => {
  e.preventDefault();

  // Get input values
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const isbn = isbnInput.value.trim();

  // Validate input fields
  if (title === '' || author === '' || isbn === '') {
    alert('Please fill in all fields.');
    return;
  }

  // Create a new row for the book
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${title}</td>
    <td>${author}</td>
    <td>${isbn}</td>
    <td><button class="delete">Clear</button></td>
  `;

  // Add row to the table body
  bookList.appendChild(row);

  // Clear input fields
  titleInput.value = '';
  authorInput.value = '';
  isbnInput.value = '';
});

// Add event listener for delete buttons
bookList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const row = e.target.parentElement.parentElement;
    bookList.removeChild(row);
  }
});
