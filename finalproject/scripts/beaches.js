import { saveFavorite } from "./storage.js";

const container = document.querySelector("#beachContainer");
const modal = document.querySelector("#modal");

const searchInput = document.querySelector("#searchInput");
const countryFilter = document.querySelector("#countryFilter");
const typeFilter = document.querySelector("#typeFilter");

let allBeaches = [];

async function getBeaches() {
  try {
    const res = await fetch("./data/beaches.json");
    allBeaches = await res.json();

    populateFilters(allBeaches);
    display(allBeaches);

  } catch (err) {
    console.error(err);
  }
}

function populateFilters(beaches) {
  const countries = [...new Set(beaches.map(b => b.country))];
  const types = [...new Set(beaches.map(b => b.type))];

  countries.forEach(c => {
    countryFilter.innerHTML += `<option value="${c}">${c}</option>`;
  });

  types.forEach(t => {
    typeFilter.innerHTML += `<option value="${t}">${t}</option>`;
  });
}

function display(beaches) {
  container.innerHTML = beaches.map(b => `
    <div class="card" data-id="${b.id}">
      
      <img src="${b.image}" alt="${b.name}" loading="lazy">

      <!-- 🧠 HUMAN DESCRIPTION FIRST -->
      

      <!-- 📌 DETAILS AFTER -->
      <div class="info">
        <h3>${b.name}</h3>
        <p>🌍 ${b.country}</p>
        <p>📍 ${b.location}</p>
        <p>🏷️ ${b.type}</p>
      </div>

      <button class="favBtn">⭐</button>
    </div>
  `).join("");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.classList.contains("favBtn")) return;

      const beach = allBeaches.find(b => b.id == card.dataset.id);
      showModal(beach);
    });

    card.querySelector(".favBtn").addEventListener("click", (e) => {
      e.stopPropagation();
      const beach = allBeaches.find(b => b.id == card.dataset.id);
      saveFavorite(beach);
      alert("Added to favorites!");
    });
  });
}

function showModal(b) {
  modal.innerHTML = `
    <h2>${b.name}</h2>
    <p>${b.description}</p>
    <button onclick="document.querySelector('#modal').close()">Close</button>
  `;
  modal.showModal();
}

// 🔍 FILTER FUNCTION
function filterBeaches() {
  let filtered = [...allBeaches];

  const search = searchInput.value.toLowerCase();
  const country = countryFilter.value;
  const type = typeFilter.value;

  if (search) {
    filtered = filtered.filter(b =>
      b.name.toLowerCase().includes(search)
    );
  }

  if (country !== "all") {
    filtered = filtered.filter(b => b.country === country);
  }

  if (type !== "all") {
    filtered = filtered.filter(b => b.type === type);
  }

  display(filtered);
}

// EVENTS
searchInput.addEventListener("input", filterBeaches);
countryFilter.addEventListener("change", filterBeaches);
typeFilter.addEventListener("change", filterBeaches);

getBeaches();

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  const modEl = document.getElementById("lastModified");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (modEl) {
    modEl.textContent = new Date(document.lastModified).toLocaleString();
  }
});