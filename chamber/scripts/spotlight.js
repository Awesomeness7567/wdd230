const url = './data/spotlight.json';

const displayHashirasCard = (members) => {
    const cards = document.querySelector(".directory-cards"); // select the output container element
        
            members.forEach(member => {
                let section = document.createElement("section");
                section.innerHTML = `<h4>${member.name}</h4>
                    <p>Address: ${member.address}</p>
                    <p>Kasugai Crow: ${member.communication}</p>
                    <img class="hashira-img" src="${member.imageURL}">
                    <p>${member.membershipLevel}</p>
                    <button><a class="card-button" href="${member.websiteURL}">Website</a></button>`;
                    if ((member.membershipLevel == 'Stone Hashira') || (member.membershipLevel == 'Mist Hashira') || (member.membershipLevel == 'Love Hashira')) {
                        section.classList.add('gold-member');
                    }
                    cards.appendChild(section);
            });
};

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

getHashiraData();