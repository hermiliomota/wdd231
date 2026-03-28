const url = "data/members.json";
const container = document.querySelector("#members");

async function getSpotlights() {
    const response = await fetch(url);
    const data = await response.json();

    const filtered = data.filter(m => m.membership >= 2);
    const shuffled = filtered.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 3);

    displayMembers(selected);
}

function getBadge(level) {
    switch(level) {
        case 3: return `<span class="badge gold">Gold</span>`;
        case 2: return `<span class="badge silver">Silver</span>`;
        default: return `<span class="badge member">Member</span>`;
    }
}

function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {
        const card = document.createElement("section");
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name} ${getBadge(member.membership)}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
            <p>${member.description}</p>
        `;
        container.appendChild(card);
    });
}

// Footer automatic dates
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Nav toggle mobile
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => navMenu.classList.toggle("open"));

getSpotlights();