let slideIndex = 0;
showSlides(slideIndex);

// Rotación automática cada 10 segundos
setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
}, 10000);

function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");

    if (n >= slides.length) {
        slideIndex = 0;
    }
    if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

// Variable para llevar la cuenta del slide actual
showSlides(slideIndex);

// Función para cambiar los slides cuando se hace clic en las flechas
function moveSlides(n) {
    showSlides(slideIndex += n);
}

// Función para ir a un slide específico
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Lógica para mostrar el slide actual y ocultar los demás
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    // Ocultar todos los slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remover la clase "active" de todos los puntos
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Mostrar el slide actual y añadir la clase "active" al punto correspondiente
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function toggleMenu() {
    const navMenu = document.querySelector('nav ul');
    navMenu.classList.toggle('show'); // Alternar la clase 'show'
}