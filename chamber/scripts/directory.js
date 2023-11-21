// Grid vs list

var gridSelector = document.querySelector('#directory-grid');
var listSelector = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', ()=>{
    if (!gridSelector.classList.contains('active')){    
        gridSelector.classList.add('active');
        listSelector.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

listSelector.addEventListener('click', ()=>{
    if (!listSelector.classList.contains('active')){
        listSelector.classList.add('active');
        gridSelector.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});


// members data

const url = './data/members.json';

const displayHashirasCard = (members) => {
    const cards = document.querySelector(".directory-cards"); // select the output container element
        
            members.forEach(member => {
                let section = document.createElement("section")
                section.innerHTML = `<h5>${member.name}</h5>
                    <p>Address: ${member.address}</p>
                    <p>Kasugai Crow: ${member.communication}</p>
                    <img class="hashira-img" src="${member.imageURL}">
                    <p>${member.membershipLevel}</p>
                    <button><a class="card-button" href="${member.websiteURL}">Website</a></button>`
                    cards.appendChild(section);
            });
}

async function getHashiraData() {
    const response = await fetch(url);
    if (response.ok){
        const data = await response.json();
        displayHashirasCard(data.members);
    }
    else{
        console.error("There was an error loading the data!!");
    }
}

getHashiraData()