
function aggiungiClasse(menu, active) {
    const elemento = document.getElementById(menu);
    if (elemento) {
        elemento.classList.toggle(active);
    }
}
document.getElementById('burger').addEventListener('click', function () {
    aggiungiClasse('menu', 'active');
});

document.getElementById('chiudi').addEventListener('click', function () {
    aggiungiClasse('menu', 'active');
});



function showPreview(button) {
    const preview = button.nextElementSibling; // Seleziona la .video-preview
    preview.style.display = "block"; // Mostra l'anteprima video
}

function hidePreview(button) {
    const preview = button.nextElementSibling;
    preview.style.display = "none"; // Nascondi l'anteprima video
}