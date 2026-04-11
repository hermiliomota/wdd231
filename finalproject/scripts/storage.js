export function saveFavorite(item) {
  let favs = JSON.parse(localStorage.getItem("favs")) || [];

  if (!favs.find(f => f.id === item.id)) {
    favs.push(item);
  }

  localStorage.setItem("favs", JSON.stringify(favs));
}

export function getFavorites() {
  return JSON.parse(localStorage.getItem("favs")) || [];
}

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