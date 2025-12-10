// menu.js

// Récupère les éléments
const toggleBtn = document.getElementById('menu-toggle');
const nav = document.getElementById('main-nav');

// État initial : menu caché
nav.style.display = 'none';

// Ajoute un écouteur d’événement
toggleBtn.addEventListener('click', () => {
    if (nav.style.display === 'none') {
        nav.style.display = 'block';   // Affiche le menu
    } else {
        nav.style.display = 'none';    // Cache le menu
    }
});