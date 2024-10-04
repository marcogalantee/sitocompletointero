
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