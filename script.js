// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });
}

// Smooth scrolling for navigation links with offset for fixed navbar
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        const navHeight = document.querySelector('.navbar').offsetHeight;

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - navHeight,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar visual feedback on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(10, 15, 30, 0.98)";
        navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "rgba(15, 23, 42, 0.95)";
        navbar.style.boxShadow = "none";
    }
});
