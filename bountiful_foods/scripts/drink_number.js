let submitCount = parseInt(localStorage.getItem('submitCount')) || 0;
let submitCountElement = document.getElementById('submitCount');

function submitForm() {
  submitCount++;
  localStorage.setItem('submitCount', submitCount);
  console.log("Form submitted " + submitCount + " times.");
  submitCountElement.textContent = submitCount;
}

submitCountElement.textContent = submitCount;