const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li');

// Toggle Mobile Menu
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    // Burger Animation
    if(burger.classList.contains('toggle')) {
        burger.children[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
        burger.children[1].style.opacity = "0";
        burger.children[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
    } else {
        burger.children[0].style.transform = "none";
        burger.children[1].style.opacity = "1";
        burger.children[2].style.transform = "none";
    }
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(15, 23, 42, 0.98)";
        navbar.style.padding = "0.7rem 0";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.9)";
        navbar.style.padding = "1rem 0";
        navbar.style.boxShadow = "none";
    }
});

// Add "Fade In" effect when scrolling to cards
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card, .project-card, .skill-category').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(20px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
});
