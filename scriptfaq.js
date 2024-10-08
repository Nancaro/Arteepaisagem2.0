
// Función para mostrar/ocultar el menú hamburguesa
function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    hamburger.classList.toggle('open');
    navbar.classList.toggle('open');
}

// Agregar evento de clic al botón hamburguesa y a los enlaces del menú
document.getElementById('hamburger').addEventListener('click', toggleMenu);

document.querySelectorAll('#navbar ul li a').forEach(link => {
    link.addEventListener('click', () => {
        const navbar = document.getElementById('navbar');
        navbar.classList.remove('open'); // Ocultar el menú después de hacer clic en un enlace
    });
});


    // script.js
const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});