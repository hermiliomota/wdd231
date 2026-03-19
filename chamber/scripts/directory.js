const url = "data/members.json";
const container = document.querySelector("#members");

// Fetch e exibe membros
async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

// Retorna badge de membership
function getBadge(level) {
    switch(level) {
        case 3: return `<span class="badge gold">Gold</span>`;
        case 2: return `<span class="badge silver">Silver</span>`;
        default: return `<span class="badge member">Member</span>`;
    }
}

// Monta os cards/lista
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

// Toggle Grid/List
document.querySelector("#gridView").addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
});

document.querySelector("#listView").addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
});

// Footer dates automáticas
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Toggle mobile nav
const menuBtn = document.querySelector("#menuBtn");
const navMenu = document.querySelector("#navMenu");
menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

getMembers();