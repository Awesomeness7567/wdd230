const toggleSwitch = document.querySelector('#dark-mode-toggle');

toggleSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// darkmode.addEventListener('click', () => {
//     if (darkmode.textContent == 'DARK') {
//         document.documentElement.style.setProperty('--text-color','black');
//     }
// })