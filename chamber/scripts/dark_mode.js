const toggleSwitch = document.querySelector('#dark-mode-toggle');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});