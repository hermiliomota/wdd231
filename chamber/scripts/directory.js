const url = "data/members.json";
const container = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

function getBadge(level) {
    switch(level) {
        case 3: return `<span class="badge gold">Gold</span>`;
        case 2: return `<span class="badge silver">Silver</span>`;
        default: return `<span class="badge member">Member</span>`;
    }
}

const displayMembers = (members) => {
    container.innerHTML = "";

    members.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <h3>${member.name} ${getBadge(member.membership)}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visitar Website</a>
            <p>${member.description}</p>
        `;

        container.appendChild(card);
    });
};

document.querySelector("#gridView").addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

document.querySelector("#listView").addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

getMembers();