// Set timestamp
document.getElementById("timestamp").value = new Date().toISOString();

// Modal open/close
document.querySelectorAll('.membership-cards a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const id = e.target.dataset.modal;
        document.getElementById(id).showModal();
    });
});

document.querySelectorAll('dialog button').forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.closest('dialog').close();
    });
});