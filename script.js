// script.js
let slideIndex = 0;
showSlides(slideIndex);

// Rotación automática cada 10 segundos
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 10000);

// Función para mostrar los slides
function showSlides(n) {
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");

    // Ajustar el índice del slide
    if (n >= slides.length) {
        slideIndex = 0;
    } 
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    // Ocultar todos los slides
    Array.from(slides).forEach(slide => slide.style.display = "none");

    // Remover la clase "active" de todos los puntos
    Array.from(dots).forEach(dot => dot.classList.remove("active"));

    // Mostrar el slide actual y añadir la clase "active" al punto correspondiente
    slides[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
}

// Función para cambiar los slides cuando se hace clic en las flechas
function moveSlides(n) {
    showSlides(slideIndex += n);
}

// Función para ir a un slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

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