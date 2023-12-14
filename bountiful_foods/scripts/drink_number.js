// Get the form element
const form = document.querySelector('form');

// Get the count from local storage
let count = localStorage.getItem('formSubmitCount');

// If the count is not set, set it to 0
if (count === null) {
  count = 0;
}

// Increment the count when the form is submitted
form.addEventListener('submit', () => {
  count++;
  localStorage.setItem('formSubmitCount', count);
  document.querySelector('#submit-count').textContent = count;
});

// Display the count in HTML
document.querySelector('#submit-count').textContent = localStorage.getItem('formSubmitCount');