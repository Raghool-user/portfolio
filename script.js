// --- Mobile Navigation ---
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    navLinks.classList.toggle('active');

    // Burger Animation
    burger.classList.toggle('toggle');
    
    // Animate Lines
    const lines = burger.querySelectorAll('div');
    if (burger.classList.contains('toggle')) {
        lines[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        lines[1].style.opacity = "0";
        lines[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
    }
});

// Close menu when a link is clicked
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        const lines = burger.querySelectorAll('div');
        lines[0].style.transform = "none";
        lines[1].style.opacity = "1";
        lines[2].style.transform = "none";
    });
});

// --- Scroll Effects ---
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.padding = "0.5rem 0";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
    } else {
        navbar.style.padding = "1rem 0";
        navbar.style.boxShadow = "none";
    }
});
