import { items } from '../data/items.mjs';

// Grid container
const grid = document.getElementById('discover-grid');

// Create cards
items.forEach((item, index) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.gridArea = `item${index + 1}`; // match named grid areas

  card.innerHTML = `
    <h2>${item.name}</h2>
    <figure><img src="${item.image}" alt="${item.name}"></figure>
    <address>${item.address}</address>
    <p>${item.description}</p>
    <button>Learn More</button>
  `;

  grid.appendChild(card);
});

// Visitor message with localStorage
const messageEl = document.getElementById('welcome-message');
const lastVisit = localStorage.getItem('lastVisit');
const now = Date.now();

if (!lastVisit) {
  messageEl.textContent = "Welcome! Let us know if you have any questions.";
} else {
  const daysDiff = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
  if (daysDiff < 1) {
    messageEl.textContent = "Back so soon! Awesome!";
  } else {
    messageEl.textContent = `You last visited ${daysDiff} ${daysDiff === 1 ? 'day' : 'days'} ago.`;
  }
}

localStorage.setItem('lastVisit', now);