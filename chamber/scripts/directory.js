const url = "./data/members.json";

// const displayBusinessesCard = (businesss) => {
//     const cards = document.querySelector(".directory-cards"); // select the output container element

//     businesss.forEach((business) => {
//         // Create elements to add to the div.cards element
//         let card = document.createElement("section");
//         card.innerHTML = `
//         <img src="${business.imageURL}">
//         <p>${business.name}</p>
//         <p>${business.streetAddress}</p>
//         <p>${business.cityStateZip}</p>
//         <p><a class="card-button" href="${business.websiteURL}">Website</a></p>
//         `;
//         if (business.membershipLevel=='gold'){
//           card.classList.add('gold-member');
//         }
//         cards.appendChild(card);
//       }); // end of forEach loop
      
//     }; // end of function expression


const displayHashirasCard = (members) => {
    const cards = document.querySelector(".directory-cards"); // select the output container element
        
            members.forEach(member => {
                let section = document.createElement("section")
                // section.classList.add("card")
                section.innerHTML = `<h3>${member.name}</h3>
                    <p>Address: ${member.address}</p>
                    <p>Kasugai Crow: ${member.communication}</p>
                    <img src="${member.imageURL}">
                    <p>${member.membershipLevel}</p>
                    <p><a class="card-button" href="${member.websiteURL}">Website</a></p>`
                    section.innerHTML = sectionHTML;
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
        console.error("There was an error loading the data!!")
    }
}

getHashiraData()