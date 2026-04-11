document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector("#menuBtn");
  const menu = document.querySelector("#navMenu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("show");
    });
  }
});

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