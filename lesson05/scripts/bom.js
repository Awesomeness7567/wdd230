const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value) {
        const li = document.createElement('li');
        const label = document.createElement('a');
        const deleteButton = document.createElement('button');
        const linkButton = document.createElement('button');
        
        label.textContent = input.value;
        li.textContent = input.value;
        deleteButton.textContent = '❌'
        linkButton.textContent = '🔗'
        li.append(linkButton);
        li.append(deleteButton);
        list.append(li);

        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });

        linkButton.addEventListener('click', () => {
            const linkAddress = prompt("Please Enter Link URL");
            if (linkAddress) {
                label.href = linkAddress;
                label.target = "_blank";
            }
        });
        input.focus();
        input.value = '';
    } else {
        alert("Input field is empty");
        scriptureInput.focus();
    }
});